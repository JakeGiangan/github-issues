import React from 'react';
import TableItem from './TableItem';

const TableList = (props) => {
    const issue = props.issues.map((props) => {
        return <TableItem key={issue.id} issue={issue} />;
    });
    return <div>{issue}</div>;
};

export default TableList;