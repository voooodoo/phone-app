import React from 'react';

import PhonesListItem from '../phones-list-item';

import './phones-list.css';

const PhonesList = ({ phones }) => {
  return (
    <div className="col-8 mt-4">
      <ul className="list-group phones-list">
        {phones.map(phone => {
          return <PhonesListItem phone={phone} key={phone.id} />;
        })}
      </ul>
    </div>
  );
};

export default PhonesList;
