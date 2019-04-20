import React from "react";
import { Link } from "react-router-dom";

const Home = props => {
  return (
    <section id="header">
      <div className="container">
        <div className="ml-3">
          <Link to="/form/:id">
            <button
              id="homebtnprimary"
              className="homesection btn btn-outline-primary"
            >
              Create Profile
            </button>
          </Link>
          <Link to="/jobs">
            <button
              id="findwork"
              type="button"
              className="homesection btn btn-outline-success ml-2"
            >
              Find Work
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
