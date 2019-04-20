import React from "react";
import { Link } from "react-router-dom";
const RegistrationCard = props => {
  return (
    <div className="signup-form">
      <form>
        <h2>Register</h2>
        <p className="hint-text">
          Create your account. It's free and only takes a minute.
        </p>
        <div className="container">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="first_name"
              placeholder="First Name"
              required="required"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="last_name"
              placeholder="Last Name"
              required="required"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Email"
              required="required"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              required="required"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              name="confirm_password"
              placeholder="Confirm Password"
              required="required"
            />
          </div>
        </div>
        <div className="form-group">
          <label className="checkbox-inline">
            <input type="checkbox" required="required" /> I accept the{" "}
            <a href="##">Terms of Use</a> &amp; <a href="##">Privacy Policy</a>
          </label>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary btn-lg btn-block">
            Register Now
          </button>
        </div>
        <div className="text-center">
          Already have an account? <Link to="/form/login">Sign in</Link>
        </div>
      </form>
    </div>
  );
};

export default RegistrationCard;
