import React from "react";

const Navbar = () => {
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
              <a id="home" className="nav-link" href="##">
                home
              </a>
            </li>
            <li className="nav-item">
              <a id="findwork" className="nav-link" href="##">
                find work
              </a>
            </li>
            <li className="nav-item">
              <a id="profile" className="nav-link" href="##">
                profile
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
