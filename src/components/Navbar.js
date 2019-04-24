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
              <Link
                to="/"
                className="nav-link"
                activestyle={{ color: "#316bb0" }}
              >
                TimeTravel
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/welcome"
                className="nav-link"
                activestyle={{ color: "#316bb0" }}
              >
                welcome
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/home"
                className="nav-link"
                activestyle={{ color: "#316bb0" }}
              >
                home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/work"
                className="nav-link"
                activestyle={{ color: "#316bb0" }}
              >
                careers
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/jobs"
                className="nav-link"
                activestyle={{ color: "#316bb0" }}
              >
                find work
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/profile"
                className="nav-link"
                activestyle={{ color: "#316bb0" }}
              >
                profile
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/form/login"
                className="nav-link"
                activestyle={{ color: "#316bb0" }}
              >
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
