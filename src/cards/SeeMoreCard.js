import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SeeMoreCard = props => {
  return (
    <div className="card">
      <div className="card-body seemore">
        <div className="container see-content">
          <h4>Avg Statistics of {props.name}</h4>
          <ul id="state-content">
            <li>
              <span>Gender:</span> {props.gender}
            </li>
            <li>
              <span>Age:</span> {props.age}
            </li>
            <li>
              <span>Hours:</span> {props.hours}
            </li>
            <li>
              <span>Wage per Week:</span> {props.wage}
            </li>
            <li>
              <span>Work Environment:</span> {props.environment}
            </li>
            <li>
              <span>Skill Level:</span> {props.skill}
            </li>
            <li>
              <span>HS Diploma:</span> {props.education}
            </li>
            <li>
              <span>Housing:</span> {props.housing.toString()}
            </li>
          </ul>
          <div className="float-right">
            <Link to="/form/application">
              <button className="btn-success">apply</button>
            </Link>
            <button className="btn-primary">wantad</button>
            <button className="btn-warning">hide</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeeMoreCard;
SeeMoreCard.propTypes = {
  name: PropTypes.string,
  gender: PropTypes.string,
  age: PropTypes.string,
  hours: PropTypes.number,
  wage: PropTypes.string,
  environment: PropTypes.string,
  skill: PropTypes.string,
  education: PropTypes.string,
  housing: PropTypes.string
};

SeeMoreCard.defaultProps = {
  name: "default JobName",
  gender: "default both",
  age: "default adult",
  hours: 16,
  wage: "$4.00",
  environment: "default outdoors",
  skill: "default kindred",
  education: "default some education",
  housing: "false"
};
