package deployment

import (
	"fmt"
	"os"
	"text/tabwriter"

	"github.com/pkg/errors"
	"github.com/singulatron/superplatform/cli/config"
	sdk "github.com/singulatron/superplatform/sdk/go"
	"github.com/spf13/cobra"
)

// List
func List(cmd *cobra.Command, args []string) error {
	ctx := cmd.Context()

	url, token, err := config.GetSelectedUrlAndToken()
	if err != nil {
		return errors.Wrap(err, "cannot get env url")
	}

	cf := sdk.NewApiClientFactory(url)

	rsp, _, err := cf.Client(sdk.WithToken(token)).DeploySvcAPI.ListDeployments(ctx).Execute()
	if err != nil {
		return errors.Wrap(err, "failed to save service deployment")
	}

	writer := tabwriter.NewWriter(os.Stdout, 0, 0, 3, ' ', 0)
	defer writer.Flush()

	fmt.Fprintln(writer, "ID\tDEFINITION ID\tSTATUS\tDETAILS")

	for _, deployment := range rsp.Deployments {
		details := ""
		if deployment.Details != nil && len(*deployment.Details) > 50 {
			d := *deployment.Details
			details = d[0:50]
		}
		fmt.Fprintf(writer, "%s\t%s\t%s\t%s\n", deployment.Id, deployment.DefinitionId, *deployment.Status, details)
	}

	return nil
}
