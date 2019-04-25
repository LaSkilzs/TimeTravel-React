import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomeState from "./HomeState";
import WorkState from "./WorkState";
import ProfileState from "./ProfileState";
import JobState from "./JobState";
import Form from "./Form";
import SeeMoreCard from "../cards/SeeMoreCard";
import Welcome from "../components/Welcome";
import API from "../API";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homestate: {},
      jobstate: {},
      workstate: {},
      helpwanteds: 0,
      jobs: 0,
      industry: {},
      parent: "container"
    };
  }

  async componentDidMount() {
    API.loadData().then(data => {
      this.setState({
        homestate: data.industries,
        jobstate: data.jobs,
        workstate: data.helpwanteds
      });
    });
  }

  getHelpwanteds = job => {
    fetch(`http://localhost:3000/api/v1/jobs/${job.id}/filtered`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          helpwanteds: data.helpwanteds,
          paginate: data.pagination,
          data: "home"
        })
      );
    console.log("help completed");
  };

  render() {
    console.log("state", this.state);
    return (
      <section id="main">
        <div className="main container">
          <Switch>
            <Route exact path="/welcome" component={Welcome} />
            <Route
              exact
              path="/home"
              render={routerProps => <HomeState {...routerProps} />}
            />
            <Route
              path="/jobs"
              render={routerProps => (
                <JobState parent={this.state.parent} {...routerProps} />
              )}
            />
            <Route
              path="/work"
              render={routerProps => (
                <WorkState {...routerProps} parent={this.state.parent} />
              )}
            />
            <Route
              path="/form/:name"
              render={routerProps => <Form {...routerProps} />}
            />
            <Route path="/profile" component={ProfileState} />
            <Route render={() => <h1>404 Error</h1>} />
          </Switch>
          <SeeMoreCard />
        </div>
      </section>
    );
  }
}

export default Container;
