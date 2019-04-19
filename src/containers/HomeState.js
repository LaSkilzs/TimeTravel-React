import React from "react";
import Title from "../components/Title";
import Profile from "../components/Profile";
import Pagination from "../components/Pagination";
import FactState from "./FactState";

const HomeState = props => {
  return (
    <React.Fragment>
      <FactState />
      <Title title={"Job Seekers"} />
      <Profile />
      <Pagination />
    </React.Fragment>
  );
};

export default HomeState;
