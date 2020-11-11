import React from 'react';
import Moment from 'react-moment';

const TableItem = ({ issues, loading }) => {
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

  return (

    <tbody>
      {
        issues.map(issue => (
          <tr>
            <td key={issue.id} >
              <a className="text-light" onClick href={issue.html_url} > {issue.title} </a>
              {issue.labels.map(label => (
                <span key={label.id} class="badge badge-primary" style={{ backgroundColor: label.color }} > { label.name}</span>
              ))}
              <br />#{issue.id} {issue.state} on <Moment fromNow ago>{issue.updated_at}</Moment> ago by <a className="text-info" href={issue.user.html_url} >{issue.user.login}</a>
            </td>
          </tr>
        ))
      }
    </tbody >
  );
};

export default TableItem;