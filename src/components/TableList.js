import React from 'react';
import TableItem from './TableItem';
import { Spinner } from 'react-bootstrap';
const TableList = ({ issues, loading }) => {
  if (loading) {
    return (
      <div class="d-flex justify-content-center">
        <h4 className="text-center">Loading items<Spinner animation="grow" size="sm" /><Spinner animation="grow" size="sm" /><Spinner animation="grow" size="sm" /></h4>
      </div>
    )
  }
  return <TableItem issues={issues} />;

};

export default TableList;