import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomeState from "./HomeState";
import WorkState from "./WorkState";
import ProfileState from "./ProfileState";
import JobState from "./JobState";
import Form from "./Form";
import SeeMoreCard from "../cards/SeeMoreCard";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      helpwanted_id: 0,
      profile_id: 0,
      user_id: 0
    };
  }

  handleHelpwanted = helpwanted_id => this.setState({ helpwanted_id });
  handleProfile = profile_id => this.setState({ profile_id });

  render() {
    console.log(this.state);
    return (
      <section id="main">
        <div className="main container">
          <Switch>
            <Route exact path="/home" component={HomeState} />
            <Route path="/profile" component={ProfileState} />
            <Route path="/jobs" component={JobState} />
            <Route
              path="/work"
              render={routerProps => (
                <WorkState info={this.handleHelpwanted} {...routerProps} />
              )}
            />
            <Route
              path="/form/:name"
              render={routerProps => (
                <Form info={this.state} {...routerProps} />
              )}
            />
          </Switch>
          <SeeMoreCard />
        </div>
      </section>
    );
  }
}

export default Container;
