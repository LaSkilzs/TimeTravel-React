import React from "react";
import Title from "../components/Title";
import Profile from "../components/Profile";
import Pagination from "../components/Pagination";
import FactState from "./FactState";

class ProfileState extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      title: "Profile Page"
    };
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:3000/api/v1/profiles");
    const profiles = await response.json();
    this.setState({ profiles });
  }
  render() {
    console.log(this.state.profiles);
    return (
      <React.Fragment>
        <FactState />
        <Title title={this.state.title} />
        <Profile />
        <Pagination />
      </React.Fragment>
    );
  }
}

export default ProfileState;
