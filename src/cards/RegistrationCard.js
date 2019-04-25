import React from "react";
import { Link } from "react-router-dom";
import API from "../API";

class RegistrationCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      user_id: 0
    };
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    const user = this.state;
    API.createUser(user);
    this.setState({ username: "", email: "", password: "" });
  };

  render() {
    return (
      <div className="signup-form">
        <form onSubmit={e => this.onSubmit(e)}>
          <h2>Register</h2>
          <p className="hint-text">
            Create your account. It's free and only takes a minute.
          </p>
          <div className="container">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="username"
                placeholder="username"
                required="required"
                onChange={e => this.handleChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email"
                required="required"
                onChange={e => this.handleChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                required="required"
                onChange={e => this.handleChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                name="confirm_password"
                placeholder="Confirm Password"
                required="required"
                onChange={e => this.handleChange(e)}
              />
            </div>
            <div className="form-group col-md-6">
              <input
                type="hidden"
                className="form-control"
                name="user_id"
                value={this.props.user_id}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="checkbox-inline">
              <input type="checkbox" required="required" /> I accept the
              <Link to="/">Terms of Use</Link> &amp;
              <Link to="/">Privacy Policy</Link>
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
  }
}

export default RegistrationCard;
