import React from 'react';

const PhonesListItem = props => {
  const {
    phone: { name, imageUrl, snippet, id },
  } = props;

  const url = `assets/${imageUrl}`;

  return (
    <li className="list-item">
      <div className="card mb-3 p-2">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={url} className="card-img" alt={name} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{snippet}</p>
              <p className="card-text">
                <small className="text-muted">{id}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default PhonesListItem;
