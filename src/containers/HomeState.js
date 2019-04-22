import React from "react";
import Title from "../components/Title";
import Profile from "../components/Profile";
import Pagination from "../components/Pagination";
import FactState from "./FactState";
import API from "../API";

class HomeState extends React.Component {
  constructor() {
    super();
    this.state = {
      industries: [],
      title: "Job Seekers",
      card: "home",
      paginate: [],
      length: 0
    };
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:3000/api/v1/industries");
    const industries = await response.json();
    this.setState({
      industries: industries.industries,
      paginate: industries.pagination
    });
  }

  handlePrev = e => {
    if (this.state.length === 1) {
      API.prev(this.state.paginate.prev_page_url).then(data =>
        this.setState({
          industries: data.industries,
          paginate: data.pagination
        })
      );
    } else {
      this.setState({ length: this.state.length - 1 });
    }
  };

  handleNext = e => {
    e.preventDefault();
    if (this.state.length === 4) {
      API.next(this.state.paginate.next_page_url).then(data =>
        this.setState({
          industries: data.industries,
          paginate: data.pagination
        })
      );
    } else {
      this.setState({ length: this.state.length + 1 });
    }
  };

  render() {
    console.log(this.state.industries);
    let industry = this.state.industries.map(industry => {
      return (
        <Profile card={this.state.card} industry={industry} key={industry.id} />
      );
    });
    return (
      <React.Fragment>
        <FactState />
        <Title title={this.state.title} />
        <Pagination handleNext={this.handleNext} handlePrev={this.handlePrev} />
        {industry[this.state.length]}
        <Pagination handleNext={this.handleNext} handlePrev={this.handlePrev} />
      </React.Fragment>
    );
  }
}

export default HomeState;
