import React from 'react';

const Paginate = ({ issuesPerPage, totalIssues, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalIssues / issuesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="row">
      <div className="col d-flex d-xl-flex justify-content-center justify-content-xl-center">
        <nav>
          <ul className="pagination">
            {pageNumbers.map(number =>
              <li className="page-item" key={number}>
                <a onClick={() => paginate(number)} className="page-link" href="#">{number}</a>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};




export default Paginate;