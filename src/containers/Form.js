import React from "react";
import LoginCard from "../cards/LoginCard";
import RegistrationCard from "../cards/RegistrationCard";
import ApplicationCard from "../cards/ApplicationCard";
import ProfileCard from "../cards/ProfileCard";
import { Switch, Route } from "react-router-dom";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="form-container">
        <div className="row">
          <Switch>
            <Route path="/form:id" component={LoginCard} />
            <Route path="/form:id" component={RegistrationCard} />
            <Route path="/login" component={ApplicationCard} />
            <Route path="/form:id" component={ProfileCard} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Form;
