import React from "react";
import Title from "../components/Title";
import Profile from "../components/Profile";
import Pagination from "../components/Pagination";
import JobState from "./JobState";
import WorkState from "./WorkState";
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
      industry: {},
      parent: "home",
      data: "",
      switchButton: false,
      flength: 0,
      job: {},
      filteredHelpwanteds: [],
      paginateHelp: [],
      retrieve: {}
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

  goResetHelpWanted = e => this.setState({ data: "work", switchButton: false });
  goReset = e => this.setState({ data: "container", switchButton: false });
  getJobs = industry => {
    API.getJobsByIndustry(industry).then(data => {
      this.setState({
        jobs: data.jobs,
        data: "jobs",
        industry: data.industry,
        switchButton: true
      });
    });
    console.log("api", this.state);
  };

  getHelpwanteds = job => {
    fetch(`http://localhost:3000/api/v1/jobs/${job.id}/filtered`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          filteredHelpwanteds: data.helpwanteds,
          paginateHelp: data.pagination,
          data: "home"
        })
      );
  };

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

  handleHelpPrev = e => {
    if (this.state.helpwanteds.length < 2 || this.state.flength === 1) {
      API.prev(this.state.paginateHelp.prev_page_url).then(data =>
        this.setState({
          helpwanteds: data.helpwanteds,
          paginateHelp: data.pagination
        })
      );
    } else {
      this.setState({ flength: this.state.flength - 1 });
    }
  };
  handleHelpNext = e => {
    if (this.state.helpwanteds.length < 2 || this.state.flength === 4) {
      API.next(this.state.paginateHelp.next_page_url).then(data =>
        this.setState({
          helpwanteds: data.helpwanteds,
          paginateHelp: data.pagination
        })
      );
    } else {
      this.setState({ flength: this.state.flength + 1 });
    }
  };

  render() {
    let industry = this.state.industries.map(industry => {
      return (
        <Profile
          card={this.state.card}
          industry={industry}
          key={industry.id}
          getJobs={this.getJobs}
        />
      );
    });

    if (this.state.data === "jobs") {
      return (
        <React.Fragment>
          <React.Fragment>
            <Title title={this.state.title} />
            <Profile
              card={this.state.card}
              industry={this.state.industry}
              key={this.state.industry.id}
              getJobs={this.getJobs}
              switchButton={this.state.switchButton}
              goReset={this.goReset}
              getHelpwanteds={this.getHelpwanteds}
            />
            );
          </React.Fragment>
          <JobState
            jobs={this.state.jobs}
            parent={this.state.parent}
            getHelpwanteds={this.getHelpwanteds}
          />
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
