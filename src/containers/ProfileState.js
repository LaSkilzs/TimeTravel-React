import React from "react";
import Title from "../components/Title";
import Profile from "../components/Profile";
import Pagination from "../components/Pagination";
import FactState from "./FactState";

const ProfileState = props => {
  return (
    <React.Fragment>
      <FactState />
      <Title title={"Profile Page"} />
      <Profile />
      <Pagination />
    </React.Fragment>
  );
};

export default ProfileState;
