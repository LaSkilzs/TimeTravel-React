import React from "react";
import Title from "../components/Title";
import Profile from "../components/Profile";
import Pagination from "../components/Pagination";
import FactState from "./FactState";
import API from "../API";
import Utility from "../Utility";

class WorkState extends React.Component {
  constructor() {
    super();
    this.state = {
      helpwanteds: [],
      jobs: [],
      title: "Helpwanted",
      card: "work",
      paginate: [],
      length: 0
    };
  }
  async componentDidMount() {
    const response = await fetch("http://localhost:3000/api/v1/helpwanteds");
    const helpwanteds = await response.json();
    this.setState({
      helpwanteds: helpwanteds.helpwanteds,
      paginate: helpwanteds.pagination
    });
  }

  handlePrev = e => {
    e.preventDefault();
    console.log(this.state.length - 1);
    if (this.state.length === 1) {
      console.log(this.state.length);
      API.prev(this.state.paginate.prev_page_url).then(data =>
        this.setState({
          helpwanteds: data.helpwanteds,
          paginate: data.pagination
        })
      );
    } else {
      this.setState({ length: this.state.length - 1 });
    }
  };

  handleNext = e => {
    e.preventDefault();
    console.log(this.state.length + 1);
    if (this.state.length === 4) {
      API.next(this.state.paginate.next_page_url).then(data =>
        this.setState({
          helpwanteds: data.helpwanteds,
          paginate: data.pagination
        })
      );
    } else {
      this.setState({ length: this.state.length + 1 });
    }
  };

  render() {
    console.log(this.state.helpwanteds);
    console.log(this.state.paginate);
    let helpwanted = this.state.helpwanteds.map(helpwanted => {
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
        <Pagination handleNext={this.handleNext} handlePrev={this.handlePrev} />
        {helpwanted[this.state.length]}
        <Pagination handleNext={this.handleNext} handlePrev={this.handlePrev} />
      </React.Fragment>
    );
  }
}

export default WorkState;
