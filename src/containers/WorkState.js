import React from "react";
import Title from "../components/Title";
import Profile from "../components/Profile";
import Pagination from "../components/Pagination";
import FactState from "./FactState";

class WorkState extends React.Component {
  constructor() {
    super();
    this.state = {
      helpwanteds: [],
      jobs: [],
      title: "Helpwanted"
    };
  }
  async componentDidMount() {
    const response = await fetch("http://localhost:3000/api/v1/helpwanteds");
    const helpwanteds = await response.json();
    this.setState({ helpwanteds });
  }
  render() {
    console.log(this.state.helpwanteds);
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

export default WorkState;
