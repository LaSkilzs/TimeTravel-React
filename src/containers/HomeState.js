import React from "react";
import Title from "../components/Title";
import Profile from "../components/Profile";
import Pagination from "../components/Pagination";
import JobState from "./JobState";
import API from "../API";

class HomeState extends React.Component {
  constructor() {
    super();
    this.state = {
      industries: [],
      title: "Work Industries",
      card: "home",
      paginate: [],
      length: 0,
      jobs: [],
      industry: {}
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
    let industry = this.state.industries.map(industry => {
      return (
        <Profile
          card={this.state.card}
          industry={industry}
          key={industry.id}
          getJobs={this.props.getJobs}
        />
      );
    });

    if (this.props.data === "jobs") {
      return (
        <React.Fragment>
          <React.Fragment>
            <Title title={this.state.title} />
            <Profile
              card={this.state.card}
              industry={this.props.industry}
              key={this.props.industry.id}
              getJobs={this.props.getJobs}
              switchButton={this.props.switchButton}
              goReset={this.props.goReset}
            />
            );
          </React.Fragment>
          <JobState jobs={this.props.jobs} card={this.state.card} />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Title title={this.state.title} />
          <Pagination
            handleNext={this.handleNext}
            handlePrev={this.handlePrev}
          />
          {industry[this.state.length]}
          <Pagination
            handleNext={this.handleNext}
            handlePrev={this.handlePrev}
          />
        </React.Fragment>
      );
    }
  }
}

export default HomeState;
