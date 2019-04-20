import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomeState from "./HomeState";
import WorkState from "./WorkState";
import ProfileState from "./ProfileState";
import JobState from "./JobState";
import Form from "./Form";

class Container extends Component {
  render() {
    console.log(this.props);
    return (
      <section id="main">
        <div className="main container">
          <Switch>
            <Route exact path="/home" component={HomeState} />
            <Route path="/work" component={WorkState} />
            <Route path="/profile" component={ProfileState} />
            <Route path="/jobs" component={JobState} />
            <Route
              path="/form/:name"
              component={routerProps => <Form {...routerProps} />}
            />
          </Switch>
        </div>
      </section>
    );
  }
}

export default Container;
