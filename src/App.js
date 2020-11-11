import React from 'react';
import Paginate from './components/Pagination';
import TableItem from './components/TableItem';
import TableList from './components/TableList';
import github from './apis/github';

class App extends React.Component {
  state = { issues: [] };

  componentDidMount() {
    const response = github.get('repos/facebook/create-react-app/issues')
      .then((response) => {
        console.log(response)
        this.setState({ issues: response.data });
      })
  }


  render() {
    const item = this.state.issues;
    if (!item) {
      return <div>No item found</div>
    } else {
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
                  <tbody>
                    <TableList items={item} />
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <Paginate />

        </div>
      );
    }
  }
};


export default App;