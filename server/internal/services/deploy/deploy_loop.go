/**
 * @license
 * Copyright (c) The Authors (see the AUTHORS file)
 *
 * This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).
 * You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
 */
package deployservice

import (
	"context"
	"fmt"
	"log/slog"
	"os"
	"os/signal"
	"runtime/debug"
	"syscall"
	"time"

	"github.com/pkg/errors"
	openapi "github.com/singulatron/superplatform/clients/go"
	sdk "github.com/singulatron/superplatform/sdk/go"
	"github.com/singulatron/superplatform/sdk/go/datastore"
	"github.com/singulatron/superplatform/sdk/go/logger"
	"github.com/singulatron/superplatform/server/internal/services/deploy/allocator"
	deploy "github.com/singulatron/superplatform/server/internal/services/deploy/types"
)

func (ns *DeployService) loop(triggerOnly bool) {
	interval := 15 * time.Second
	if triggerOnly {
		interval = 100 * 365 * 24 * time.Hour
	}

	ticker := time.NewTicker(interval)
	defer ticker.Stop()

	sigChan := make(chan os.Signal, 1)
	signal.Notify(sigChan, os.Interrupt, syscall.SIGTERM)

	if !ns.triggerOnly {
		go func() {
			ns.triggerChan <- struct{}{}
		}()
	}

	for {
		select {
		case <-ticker.C:
			ns.runCycle()

		case <-ns.triggerChan:
			ns.runCycle()

		case <-sigChan:
			return
		}
	}
}

func (ns *DeployService) runCycle() {
	defer func() {
		if r := recover(); r != nil {
			debug.PrintStack()
			logger.Error("Deploy cycle panic", slog.Any("panic", r))
		}
	}()

	err := ns.cycle()
	if err != nil {
		logger.Error("Deploy cycle error", slog.Any("error", err))
	}
}

func (ns *DeployService) cycle() error {
	ctx := context.Background()

	ns.lock.Acquire(ctx, "deploy-svc-deploy")
	defer ns.lock.Release(ctx, "deploy-svc-deploy")

	registry := ns.clientFactory.Client(sdk.WithToken(ns.token)).RegistrySvcAPI

	deploymentIs, err := ns.deploymentStore.Query().Find()
	if err != nil {
		return err
	}

	deployments := []*deploy.Deployment{}

	for _, deploymentI := range deploymentIs {
		deployment := deploymentI.(*deploy.Deployment)
		deployments = append(deployments, deployment)
	}

	listNodesRsp, _, err := registry.ListNodes(ctx).Execute()
	if err != nil {
		return errors.Wrap(err, "Error calling list nodes")
	}

	listInstancesRsp, _, err := registry.ListInstances(ctx).Execute()
	if err != nil {
		return errors.Wrap(err, "Error calling list service instances")
	}

	listDefinitionsRsp, _, err := registry.ListDefinitions(ctx).Execute()
	if err != nil {
		return errors.Wrap(err, "Error calling list service definitions")
	}

	commands := allocator.GenerateCommands(listNodesRsp.Nodes, listInstancesRsp.Instances, deployments)

	for _, command := range commands {
		var node *openapi.RegistrySvcNode
		var definition *openapi.RegistrySvcDefinition
		var deployment *deploy.Deployment

		for _, v := range listNodesRsp.Nodes {
			if v.Url == command.NodeUrl {
				node = &v
			}
		}

		for _, v := range deployments {
			if v.Id == command.DeploymentId {
				deployment = v
			}
		}

		if deployment == nil {
			logger.Error("No deployment with id '%v' found for command '%v'",
				slog.String("deploymentId", command.DeploymentId),
				slog.String("commandAction", string(command.Action)),
			)
			continue
		}

		for _, v := range listDefinitionsRsp.Definitions {
			if v.Id == deployment.DefinitionId {
				definition = &v
			}
		}

		err := ns.processCommand(ctx, command, node, definition, deployment)
		if err != nil {
			logger.Error("Error processing deploy command", slog.Any("error", err))
		}
	}

	return nil
}

func (ns *DeployService) processCommand(
	ctx context.Context,
	command *deploy.Command,
	node *openapi.RegistrySvcNode,
	definition *openapi.RegistrySvcDefinition,
	deployment *deploy.Deployment,
) error {
	deployment, err := ns.getDeploymentById(command.DeploymentId)
	if err != nil {
		return err
	}
	if deployment.Status == deploy.StatusPending {
		deployment.Status = deploy.StatusDeploying
		err = ns.deploymentStore.Upsert(deployment)
		if err != nil {
			return err
		}
	}

	switch command.Action {
	case deploy.CommandTypeStart:
		ns.executeStartCommand(ctx, command, node, definition, deployment)
	case deploy.CommandTypeScale:
	case deploy.CommandTypeKill:
	}

	return nil
}

func (ns *DeployService) executeStartCommand(
	ctx context.Context,
	command *deploy.Command,
	node *openapi.RegistrySvcNode,
	definition *openapi.RegistrySvcDefinition,
	deployment *deploy.Deployment,
) error {
	logger.Info("Executing start command", slog.String("deploymentId", deployment.Id))

	err := func() error {
		if definition == nil {
			return fmt.Errorf("definition '%v' cannot be found", deployment.DefinitionId)
		}
		_, _, err := ns.clientFactory.Client(sdk.WithAddress(*command.NodeUrl), sdk.WithToken(ns.token)).DockerSvcAPI.LaunchContainer(ctx).Request(
			openapi.DockerSvcLaunchContainerRequest{
				Image:    definition.Image.Name,
				Port:     definition.Image.Port,
				HostPort: definition.HostPort,
				Options: &openapi.DockerSvcLaunchContainerOptions{
					Name: openapi.PtrString(fmt.Sprintf("superplatform-%v", definition.Id)),
				},
			},
		).Execute()
		err = sdk.OpenAPIError(err)

		return err
	}()

	if err != nil {
		logger.Warn("Error executing start command",
			slog.String("deploymentId", deployment.Id),
			slog.Any("error", err),
		)
		deployment, readErr := ns.getDeploymentById(command.DeploymentId)
		if readErr != nil {
			return readErr
		}
		deployment.Status = deploy.DeploymentStatus(openapi.StatusError)
		deployment.Details = err.Error()

		writeErr := ns.deploymentStore.Upsert(deployment)
		if writeErr != nil {
			return writeErr
		}
	}

	logger.Debug("Successfully executed start command",
		slog.String("deploymentId", deployment.Id),
	)
	deployment, readErr := ns.getDeploymentById(command.DeploymentId)
	if readErr != nil {
		return readErr
	}

	deployment.Status = deploy.DeploymentStatus(openapi.StatusOK)
	deployment.Details = ""

	writeErr := ns.deploymentStore.Upsert(deployment)
	if writeErr != nil {
		return writeErr
	}

	return nil
}

func (ns *DeployService) getDeploymentById(deploymentId string) (*deploy.Deployment, error) {
	deploymentIs, err := ns.deploymentStore.Query(datastore.Id(deploymentId)).Find()
	if err != nil {
		return nil, err
	}

	deployment := deploymentIs[0].(*deploy.Deployment)

	return deployment, err
}