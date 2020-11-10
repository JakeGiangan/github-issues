import React from 'react';

const TableItem = props => {
  console.log(props);
  return (
    <tr>
      <td>
        {props.item.title}
        <br />User: {props.item.user.login}
        <br />State: {props.item.state}
        <br />Updated at: {props.item.updated_at}
      </td>
    </tr>
  );
};

export default TableItem;