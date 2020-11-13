import React from 'react';
import Moment from 'react-moment';
import ItemLabels from './ItemLabels';

const TableItem = ({ issues }) => {
  return (
    <tbody>
      {
        issues.map(issue => (
          <tr >
            <td key={issue.id} >
              <a
                className="text-light"
                onClick href={issue.html_url}
              >
                {issue.title}
              </a>
              <ItemLabels labels={issue.labels} />
              <br />
              #{issue.id}
              {issue.state} on <Moment fromNow ago>{issue.updated_at}</Moment> ago
              by <a
                className="text-info"
                href={issue.user.html_url}
              >
                {issue.user.login}
              </a>
            </td>
          </tr>
        ))
      }
    </tbody >
  );
}

export default TableItem;