import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.setState({ email: "", password: "" });
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    return (
      <div className="login-form">
        <form onSubmit={e => this.onSubmit(e)}>
          <h2 className="text-center">Log in</h2>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="email"
              required="required"
              value={this.state.email}
              name="email"
              onChange={e => this.handleChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              required="required"
              value={this.state.password}
              name="password"
              onChange={e => this.handleChange(e)}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block">
              Log in
            </button>
          </div>
          <div className="clearfix">
            <label className="pull-left checkbox-inline">
              <input type="checkbox" /> Remember me
            </label>
            <a href="##" className="pull-right ml-1">
              Forgot Password?
            </a>
          </div>
          <p className="text-center">
            <Link to="/form/register">Create an Account</Link>
          </p>
        </form>
      </div>
    );
  }
}

export default Login;
