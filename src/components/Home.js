import React from "react";

const Home = props => {
  return (
    <section id="header">
      <div className="container">
        <div className="ml-3">
          <button
            id="homebtnprimary"
            className="homesection btn btn-outline-primary"
          >
            Create Profile
          </button>
          <button
            id="findwork"
            type="button"
            className="homesection btn btn-outline-success ml-2"
          >
            Find Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
