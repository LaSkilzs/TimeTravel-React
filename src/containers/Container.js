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
      homestate: [],
      homepage: [],
      jobstate: [],
      jobpage: [],
      workstate: [],
      workpage: [],
      parent: "container",
      switchbutton: false,
      pageChange: false
    };
    API.loadData().then(data => {
      this.setState({
        homestate: data.industries.industries,
        homepage: data.industries.pagination,
        jobstate: data.jobs.jobs,
        jobpage: data.jobs.pagination,
        workstate: data.helpwanteds.helpwanteds,
        workpage: data.helpwanteds.pagination,
        pageChange: false
      });
    });
  }

  getJobs = industry => {
    API.getJobsByIndustry(industry).then(data => {
      this.setState({
        jobstate: data,
        data: "jobs",
        industry: data.industry,
        switchButton: true
      });
    });
  };

  getHelpwanteds = job => {
    fetch(`http://localhost:3000/api/v1/jobs/${job.id}/filtered`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          workstate: data,
          data: "home"
        })
      );
  };

  handleData = (component, data, paginateType, pagination) =>
    this.setState({ [component]: data, [paginateType]: pagination });

  goResetHelpWanted = e => this.setState({ switchButton: false });
  goReset = e => this.setState({ switchButton: false });

  render() {
    return (
      <section id="main">
        <div className="main container">
          <Switch>
            <Route exact path="/welcome" component={Welcome} />
            <Route
              exact
              path="/home"
              render={routerProps => (
                <HomeState
                  {...routerProps}
                  getJobs={this.getJobs}
                  switchButton={this.state.switchButton}
                  goReset={this.goReset}
                  industries={this.state.homestate}
                  jobs={this.state.jobstate}
                />
              )}
            />
            <Route
              path="/jobs"
              render={routerProps => (
                <JobState
                  parent={this.state.parent}
                  {...routerProps}
                  jobs={this.state.jobstate}
                />
              )}
            />
            <Route
              path="/work"
              render={routerProps => (
                <WorkState
                  {...routerProps}
                  parent={this.state.parent}
                  helpwanteds={this.state.workstate}
                  handleNext={this.handleNext}
                  handlePrev={this.handlePrev}
                />
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
