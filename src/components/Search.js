import React from "react";

const Search = props => {
  return (
    <div className="searchbar input-group mt-4">
      <div className="input-group-prepend">
        <button className="btn btn-outline-success" type="button">
          find by skill
        </button>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="find by skill"
          />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="New York" />
        </div>
        <button className="btn btn-outline-primary">find by state</button>
      </div>
    </div>
  );
};

export default Search;
