import React from "react";
import Title from "../components/Title";
import Profile from "../components/Profile";
import Pagination from "../components/Pagination";
import FactState from "./FactState";

class HomeState extends React.Component {
  constructor() {
    super();
    this.state = {
      industries: [],
      title: "Job Seekers"
    };
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:3000/api/v1/industries");
    const industries = await response.json();
    this.setState({ industries });
  }

  render() {
    console.log(this.state.industries);
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

export default HomeState;
