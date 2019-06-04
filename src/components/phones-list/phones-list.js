import React from 'react';

const PhonesList = ({ phones }) => {
  return (
    <div className="col-8 mt-4">
      <ul className="list-group">
        {phones.map(({ id, name }) => {
          return (
            <li className="list-group-item" key={id}>
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PhonesList;
