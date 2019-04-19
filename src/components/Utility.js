import React from "react";
import Filter from "../components/Filter";
import Search from "../components/Search";

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
