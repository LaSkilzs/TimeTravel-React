import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomeState from "./HomeState";
import WorkState from "./WorkState";
import ProfileState from "./ProfileState";
import JobState from "./JobState";
import Form from "./Form";

class Container extends Component {
  render() {
    return (
      <section id="main">
        <Route path="/login" component={Form} />
        <div className="main container">
          <Switch>
            <Route exact path="/home" component={HomeState} />
            <Route path="/work" component={WorkState} />
            <Route path="/profile" component={ProfileState} />
            <Route path="/jobs" component={JobState} />
          </Switch>
        </div>
      </section>
    );
  }
}

export default Container;
