import React from "react";
import railroad from "../images/railroad.jpeg";

const ImageCard = props => {
  return (
    <div className="card col-5 mb-5">
      <img className="m-2" src={railroad} alt="" />
      <div className="card-body">
        <h4 className="card-subtitle">Fetched Industry</h4>
      </div>
    </div>
  );
};

export default ImageCard;
