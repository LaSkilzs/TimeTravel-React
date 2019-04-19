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
            <Route path="/login" component={LoginCard} />
            <Route path="/form:type" component={RegistrationCard} />
            <Route path="/form:type" component={ApplicationCard} />
            <Route path="/form:type" component={ProfileCard} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Form;
