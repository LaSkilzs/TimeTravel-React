import React from "react";
import LoginCard from "../cards/LoginCard";
import RegistrationCard from "../cards/RegistrationCard";
import ApplicationCard from "../cards/ApplicationCard";
import ProfileCard from "../cards/ProfileCard";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";

const Form = ({ match, props }) => {
  return (
    <div className="form-container">
      <div className="row">
        <Switch>
          <Route path="/form/login" component={LoginCard} />
          <Route path="/form/register" component={RegistrationCard} />
          <Route path="/form/application" component={ApplicationCard} />
          <Route path="/form/profile" component={ProfileCard} />
        </Switch>
      </div>
    </div>
  );
};

export default Form;
Form.propTypes = {
  helpwanted_id: PropTypes.number,
  profile_id: PropTypes.number,
  user_id: PropTypes.number
};
Form.defaultProps = {
  helpwanted_id: 0,
  profile_id: 0,
  user_id: 0
};
