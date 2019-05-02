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
      title: "Work Industries",
      card: "home",
      length: 0
    };
  }

  handleSwitch = () =>
    this.setState({ switchButton: !this.state.switchButton });

  handlePrev = e => {
    console.log(this.state.length);
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
    console.log(this.state.length);
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
    let industry = this.props.industries.map(industry => {
      return (
        <Profile
          card={this.state.card}
          industry={industry}
          key={industry.id}
          getJobs={this.props.getJobs}
          goReset={this.props.goReset}
          switchButton={this.props.switchButton}
        />
      );
    });

    return (
      <React.Fragment>
        <Title title={this.state.title} />
        <Pagination handleNext={this.handleNext} handlePrev={this.handlePrev} />
        {industry[this.state.length]}
        <Pagination handleNext={this.handleNext} handlePrev={this.handlePrev} />
        <React.Fragment>
          {this.props.switchButton ? (
            <JobState jobs={this.props.jobs} card={this.state.card} />
          ) : null}
        </React.Fragment>
      </React.Fragment>
    );
  }
}

export default HomeState;
