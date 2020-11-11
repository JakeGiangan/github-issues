import React from 'react';
import Moment from 'react-moment';

const TableItem = ({ issues, loading }) => {
  if (loading) {
    return <div> Loading items...  </div>
  }

  return (

    <tbody>
      {
        issues.map(issue => (
          <tr>
            <td key={issue.id} >
              {issue.title}
              <br />#{issue.id} {issue.state} on <Moment>{issue.updated_at}</Moment> by {issue.user.login}
            </td>
          </tr>
        ))}
    </tbody>
  );
};

export default TableItem;