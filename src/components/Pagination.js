import React from 'react';

const Paginate = () => {
  return (
    <div className="row">
      <div className="col d-xl-flex justify-content-xl-center">
        <nav>
          <ul className="pagination">
            <li className="page-item"><a className="page-link" href="#" aria-label="Previous"><span aria-hidden="true">«</span></a></li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"><a className="page-link" href="#">4</a></li>
            <li className="page-item"><a className="page-link" href="#">5</a></li>
            <li className="page-item"><a className="page-link" href="#" aria-label="Next"><span aria-hidden="true">»</span></a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Paginate;