import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomeState from "./HomeState";
import WorkState from "./WorkState";
import ProfileState from "./ProfileState";
import JobState from "./JobState";
import Form from "./Form";
import SeeMoreCard from "../cards/SeeMoreCard";
import Welcome from "../components/Welcome";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      helpwanteds: 0,
      jobs: 0,
      industry: {},
      parent: "container"
    };
  }

  render() {
    console.log(this.state);
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
              render={routerProps => (
                <Form info={this.state.info} {...routerProps} />
              )}
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
