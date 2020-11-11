import React from 'react';

const TableItem = props => {
  console.log(props);
  return (
    <tr>
      <td>
        {props.issue.title}
        <br />User: {props.issue.user.login}
        <br />State: {props.issue.state}
        <br />Updated at: {props.issue.updated_at}
      </td>
    </tr>
  );
};

export default TableItem;