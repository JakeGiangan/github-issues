import React from 'react';
import Table from './components/Table';
import Paginate from './components/Pagination';

const App = () => {
  const buttonText = 'Click me';
  const labelText = 'Enter name:';

  return (
    <div className="container">

      <div className="row">
        <div className="col">
          <h1 className="text-center">Github issues</h1>
        </div>
      </div>

      <Table />

      <Paginate />
    </div>
  );
};


export default App;