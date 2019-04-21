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
      title: "Helpwanted",
      card: "work"
    };
  }
  async componentDidMount() {
    const response = await fetch("http://localhost:3000/api/v1/helpwanteds");
    const helpwanteds = await response.json();
    this.setState({ helpwanteds });
  }
  render() {
    console.log(this.state.helpwanteds);
    const helpwanted = this.state.helpwanteds.map(helpwanted => {
      return (
        <Profile
          card={this.state.card}
          helpwanted={helpwanted}
          key={helpwanted.id}
        />
      );
    });
    return (
      <React.Fragment>
        <FactState />
        <Title title={this.state.title} />
        {helpwanted[0]}
        <Pagination />
      </React.Fragment>
    );
  }
}

export default WorkState;
