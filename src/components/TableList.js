import React from 'react';
import TableItem from './TableItem';

const TableList = ({ issues, loading }) => {
  if (loading) {
    return (
      <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="sr-only"></span>
        </div> <br />
        <h4>Loading items...</h4>
      </div>
    )
  }
  return <TableItem issues={issues} />;

};

export default TableList;