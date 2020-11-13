import React, { useEffect, useState } from 'react';
import Paginate from './components/Pagination';
import TableList from './components/TableList';
import github from './apis/github';
import { Container, Row, Col, Table, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [issuesPerPage] = useState(5);

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
    <Container>
      <Row>
        <Col>
          <h1 className="text-center">Github issues</h1>
        </Col>
      </Row>

      <Row>
        <Col>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th className="text-center"><h1>create-react-app issues</h1></th>
              </tr>
            </thead>
            <TableList issues={currentIssues} loading={loading} />
          </Table>
        </Col>
      </Row>

      <Paginate issuesPerPage={issuesPerPage} totalIssues={issues.length} paginate={paginate} />

    </Container>
  );
}

export default App;