import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Title from "../components/Title";
import HomeState from "./HomeState";
import WorkState from "./WorkState";
import ProfileState from "./ProfileState";

class Container extends Component {
  render() {
    return (
      <section id="main">
        <div className="main container">
          <Switch>
            <Route exact path="/home" component={HomeState} />
            <Route path="/work" component={WorkState} />
            <Route path="/profile" component={ProfileState} />
          </Switch>
        </div>
      </section>
    );
  }
}

export default Container;
