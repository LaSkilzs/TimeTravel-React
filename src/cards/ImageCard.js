import React from "react";
import PropTypes from "prop-types";
import railroad from "../images/railroad.jpeg";
import kindred from "../images/kindred.jpg";
import avatar from "../images/avatar.png";

const ImageCard = ({ card, industry, helpwanted, profile }) => {
  if (card === "home") {
    return (
      <div className="card col-5 mb-5">
        <img
          className="m-2"
          src={industry.image}
          alt=""
          style={{ width: "400px" }}
        />
        <div className="card-body">
          <h4 className="card-subtitle">{industry.title}</h4>
        </div>
      </div>
    );
  } else if (card === "work") {
    return (
      <div className="card col-5 mb-5">
        <img
          className="m-2"
          src={helpwanted.image}
          alt=""
          style={{ width: "400px" }}
        />
        <div className="card-body ">
          <h4 className="card-subtitle">{helpwanted.location}</h4>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card col-5 mb-5">
        <img
          className="m-2"
          src={profile.avatar}
          alt=""
          style={{ width: "400px" }}
        />
        <div className="card-body ">
          <h4 className="card-subtitle">{profile.name}</h4>
        </div>
      </div>
    );
  }
};

export default ImageCard;

ImageCard.propTypes = {
  image: PropTypes.string,
  image_work: PropTypes.string,
  image_profile: PropTypes.string,
  title: PropTypes.string,
  name: PropTypes.string
};

ImageCard.defaultProps = {
  image: railroad,
  image_work: kindred,
  image_profile: avatar,
  title: "Default Title",
  name: "Default Name"
};
