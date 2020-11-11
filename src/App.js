import React, { useEffect, useState } from 'react';
import Paginate from './components/Pagination';
import TableItem from './components/TableItem';
import github from './apis/github';

const App = () => {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);
  useEffect(() => {
    const fetchIssues = async () => {
      setLoading(true);
      const res = await github.get('repos/facebook/create-react-app/issues');
      setIssues(res.data);
      setLoading(false);
    }

    fetchIssues();
  }, []);

  return (
    <div className="container" >

      <div className="row">
        <div className="col">
          <h1 className="text-center">Github issues</h1>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="table-responsive">
            <table className="table table-dark table-striped">
              <thead>
                <tr>
                  <th className="text-center"><h1>create-react-app issues</h1></th>
                </tr>
              </thead>
              <TableItem issues={issues} loading={loading} />
            </table>
          </div>
        </div>
      </div>

      <Paginate />

    </div>
  );
}

export default App;