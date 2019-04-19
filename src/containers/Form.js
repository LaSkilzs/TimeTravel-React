import React from "react";
import LoginCard from "../cards/LoginCard";
import RegistrationCard from "../cards/RegistrationCard";
import Application from "../forms/Application";

class Form extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <LoginCard />
          <RegistrationCard />
          <Application />
        </div>
      </div>
    );
  }
}

export default Form;
