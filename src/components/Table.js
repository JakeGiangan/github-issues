import React from 'react';

const Table = () => {
  return (
    <div className="row">
      <div className="col">
        <div className="table-responsive">
          <table className="table table-dark table-striped">
            <thead>
              <tr>
                <th>Column 1</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cell 1</td>
              </tr>
              <tr>
                <td>Cell 2</td>
              </tr>
              <tr>
                <td>Cell 3</td>
              </tr>
              <tr>
                <td>Cell 4</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;