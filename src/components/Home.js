import React from "react";

const Home = () => {
  return (
    <main id="mainimage">
      <div id="changeStateBtns">
        <section id="header">
          <div className="container">
            <button
              id="homebtnprimary"
              className="homesection btn btn-outline-primary"
            >
              Create Profile
            </button>
            <button
              id="findwork"
              type="button"
              className="homesection btn btn-outline-success"
            >
              Find Work
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
