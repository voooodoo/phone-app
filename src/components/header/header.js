import React from 'react';

const Header = ({ updateFilter, updateSort }) => {
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light pt-3 pb-3">
      <div className="container">
        <a className="navbar-brand" href="/">
          Phone App
        </a>
        <form className="form-inline">
          <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
            Sort By
          </label>
          <select
            className="custom-select my-1 mr-sm-2"
            id="inlineFormCustomSelectPref"
            onChange={event => updateSort(event.target.value)}
          >
            <option defaultValue value="alphabetical">
              Alphabetical
            </option>
            <option value="age">Newest</option>
          </select>
        </form>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search Phone"
            aria-label="Search"
            onChange={event => updateFilter(event.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default Header;
