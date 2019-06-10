import React from 'react';

import PhoneDetailsImage from '../phone-details-image';

const PhoneDetails = ({ phone }) => {
  if (!phone) {
    return <span className="d-inline-block m-4">Select a item from a list</span>;
  }
  const { name, images, description } = phone;
  console.log(phone);
  return (
    <div className="col-6 mt-4">
      <div className="card p-2">
        <PhoneDetailsImage images={images} name={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};
export default PhoneDetails;
