import React from 'react';

const Labels = ({ labels }) => {
  if (labels) {
    return (
      <React.Fragment>
        {labels.map(label => (
          <span className="badge badge-info" key={label.id}>{label.name}</span>
        ))}
      </React.Fragment>
    )
  }

}

export default Labels;