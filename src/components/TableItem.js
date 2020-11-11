import React from 'react';

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
              <br />User: {issue.user.login}
              <br />State: {issue.state}
              <br />Updated at: {issue.updated_at}
            </td>
          </tr>
        ))}
    </tbody>
  );
};

export default TableItem;