import React from 'react';

import './phones-list-item.css';

const PhonesListItem = props => {
  const {
    phone: { name, imageUrl, snippet, id },
  } = props;
  const { onClick } = props;
  const url = `assets/${imageUrl}`;

  return (
    <li className="list-item">
      <div className="card mb-3 pl-2">
        <div className="row no-gutters">
          <div className="col-md-3">
            <img src={url} className="card-img" alt={name} />
          </div>
          <div className="col-md-9">
            <div className="card-body p-2">
              <h5 className="card-title title" onClick={() => onClick(id)}>
                {name}
              </h5>
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
