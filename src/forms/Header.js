import React from "react";

const Header = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-laravel">
      <div className="container">
        <a className="navbar-brand" href="##">
          Laravel
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="##">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="##">
                Register
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
