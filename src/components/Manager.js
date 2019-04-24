import React from "react";
import Filter from "./Filter";
import Search from "./Search";

const Utility = props => {
  return (
    <section className="search">
      <div className="search-container">
        <hr />
        <Filter />
        <hr />
        <Search />
      </div>
    </section>
  );
};

export default Utility;
