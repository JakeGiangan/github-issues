import React, { useEffect, useState } from 'react';
import Paginate from './components/Pagination';
import TableItem from './components/TableItem';
import github from './apis/github';

const App = () => {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [issuesPerPage, setIssuesPerPage] = useState(5);

  useEffect(() => {
    const fetchIssues = async () => {
      setLoading(true);
      const res = await github.get('repos/facebook/create-react-app/issues');
      setIssues(res.data);
      setLoading(false);
    }

    fetchIssues();
  }, []);

  const indexOfLastIssue = currentPage * issuesPerPage;
  const indexOfFirstIssue = indexOfLastIssue - issuesPerPage;
  const currentIssues = issues.slice(indexOfFirstIssue, indexOfLastIssue);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);


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
              <TableItem issues={currentIssues} loading={loading} />
            </table>
          </div>
        </div>
      </div>

      <Paginate issuesPerPage={issuesPerPage} totalIssues={issues.length} paginate={paginate} />

    </div>
  );
}

export default App;