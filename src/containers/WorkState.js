import React from "react";
import Title from "../components/Title";
import Profile from "../components/Profile";
import Pagination from "../components/Pagination";
import PropTypes from "prop-types";
import API from "../API";

class WorkState extends React.Component {
  constructor() {
    super();
    this.state = {
      helpwanteds: [],
      jobs: [],
      title: "WantAds",
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
    if (this.state.helpwanteds.length < 2 || this.state.length === 1) {
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
    if (this.state.helpwanteds.length < 2 || this.state.length === 4) {
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
    console.log("workstate:", this.props);
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
        <Title title={this.state.title} />
        <Pagination handleNext={this.handleNext} handlePrev={this.handlePrev} />
        {helpwanted[this.state.length]}
        <Pagination handleNext={this.handleNext} handlePrev={this.handlePrev} />
      </React.Fragment>
    );
  }
}

export default WorkState;

WorkState.propTypes = {
  helpwanteds: PropTypes.array
};

WorkState.defaultProps = {
  helpwanteds: [{}]
};
