import React from 'react';

import PhonesListItem from '../phones-list-item';

import './phones-list.css';

const PhonesList = ({ phones, updatePhoneDetails }) => {
  console.log(phones);
  if (phones.length === 0) {
    return (
      <div className="col-6 mt-4">
        <span>Nothing</span>
      </div>
    );
  }

  return (
    <div className="col-6 mt-4">
      <ul className="list-group phones-list">
        {phones.map(phone => {
          return <PhonesListItem phone={phone} key={phone.id} updatePhoneDetails={updatePhoneDetails} />;
        })}
      </ul>
    </div>
  );
};

export default PhonesList;
