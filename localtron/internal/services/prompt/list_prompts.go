/**
 * @license
 * Copyright (c) The Authors (see the AUTHORS file)
 *
 * This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).
 * You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
 */
package promptservice

import (
	prompttypes "github.com/singulatron/singulatron/localtron/internal/services/prompt/types"
	"github.com/singulatron/singulatron/sdk/go/datastore"
)

func (p *PromptService) listPrompts(options *prompttypes.ListPromptOptions) ([]*prompttypes.Prompt, int64, error) {
	q := p.promptsStore.Query(
		options.Query.Conditions[0], options.Query.Conditions[1:]...,
	).Limit(options.Query.Limit)

	if len(options.Query.OrderBys) > 1 {
		q = q.OrderBy(options.Query.OrderBys[0], options.Query.OrderBys[1:]...)
	} else if len(options.Query.OrderBys) > 0 {
		q = q.OrderBy(options.Query.OrderBys[0])
	} else {
		q = q.OrderBy(datastore.OrderByField("createdAt", false))
	}

	if options.Query.After != nil {
		q = q.After(options.Query.After...)
	}

	resI, err := q.Find()
	if err != nil {
		return nil, 0, err
	}

	var count int64
	if options.Query.Count {
		var err error
		count, err = q.Count()
		if err != nil {
			return nil, 0, err
		}
	}

	res := []*prompttypes.Prompt{}
	for _, v := range resI {
		res = append(res, v.(*prompttypes.Prompt))
	}

	return res, count, nil
}