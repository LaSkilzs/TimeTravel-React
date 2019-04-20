import React from "react";
import PropTypes from "prop-types";
import railroad from "../images/railroad.jpeg";
import kindred from "../images/kindred.jpg";
import avatar from "../images/avatar.png";

const ImageCard = props => {
  if (props.card === "home") {
    return (
      <div className="card col-5 mb-5">
        <img className="m-2" src={props.image_home} alt="" />
        <div className="card-body">
          <h4 className="card-subtitle">{props.title}</h4>
        </div>
      </div>
    );
  } else if (props.card === "work") {
    return (
      <div class="card col-5 mb-5">
        <img class="m-2" src={props.image_work} alt="" />
        <div class="card-body ">
          <h4 class="card-subtitle">{props.title}</h4>
        </div>
      </div>
    );
  } else {
    return (
      <div class="card col-5 mb-5">
        <img class="m-2" src={props.image_profile} alt="" />
        <div class="card-body ">
          <h4 class="card-subtitle">{props.name}</h4>
        </div>
      </div>
    );
  }
};

export default ImageCard;

ImageCard.propTypes = {
  image_home: PropTypes.string,
  image_work: PropTypes.string,
  image_profile: PropTypes.string,
  title: PropTypes.string,
  name: PropTypes.string
};

ImageCard.defaultProps = {
  image_home: railroad,
  image_work: kindred,
  image_profile: avatar,
  title: "Default Title",
  name: "Default Name"
};
