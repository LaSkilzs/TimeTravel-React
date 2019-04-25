import React from "react";
import FactState from "../containers/FactState";
import Carousel from "../cards/Carousel";

const Welcome = props => {
  return (
    <div className="form-container">
      <div className="row">
        <div className="container text-center mt-5 white-color">
          <h1>Time Travel </h1>
          <h2>Historical Job Search App</h2>
        </div>
        <FactState />
        <div className="container">
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
