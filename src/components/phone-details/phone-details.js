import React from 'react';

const PhoneDeatails = ({ phone }) => {
  if (!phone) {
    return <span className="d-inline-block m-4">Select a item from a list</span>;
  }
  const { name, images, description } = phone;
  const url = `assets/${images[0]}`;
  return (
    <div className="col-6 mt-4">
      <div className="card p-2">
        <img src={url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};
export default PhoneDeatails;
