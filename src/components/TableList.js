import React from 'react';
import TableItem from './TableItem';

const TableList = (props) => {
  const issueList = props.items.map((i) => {
    return <TableItem key={i.id} issue={i} />;
  });
  return <div>{issueList}</div>;
};

export default TableList;