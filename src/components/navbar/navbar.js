import React from 'react';

const Navbar = () => {
  return (
    <div className="col-4 mt-4">
      <nav className="nav flex-column">
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search Phone"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </nav>
    </div>
  );
};

export default Navbar;
