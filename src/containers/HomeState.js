import React from "react";
import Title from "../components/Title";
import Profile from "../components/Profile";
import Utility from "../components/Utility";
import Pagination from "../components/Pagination";
import JobState from "./JobState";

const HomeState = props => {
  return (
    <React.Fragment>
      <Title />
      <Profile />
      <Utility />
      <Pagination />
      <JobState />
      <JobState />
      <JobState />
      <JobState />
      <Pagination />
    </React.Fragment>
  );
};

export default HomeState;
