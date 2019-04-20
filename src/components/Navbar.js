import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => {
  return (
    <div className="nav-container">
      <nav className="navbar fixed-top navbar-expand-xl navbar-light bg-light">
        <a className="navbar-brand" href="##">
          <img src="" width="100" height="100" alt="" />
        </a>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div id="navbarNav" className="collapse navbar-collapse">
          <ul className="navbar-nav" id="navbarNav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                welcome
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/home" className="nav-link">
                home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/work" className="nav-link">
                careers
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/jobs" className="nav-link">
                find work
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/profile" className="nav-link">
                profile
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/form:login" className="nav-link">
                login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
