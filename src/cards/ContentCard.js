import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ContentCard = props => {
  if (props.card === "home") {
    return (
      <div className="card col-7 mb-5">
        <div class="card-body">
          <h4>Industry Summary</h4>
          <ul>
            <li>
              <span>Generation:</span> {"Progressive Era"}
            </li>
            <li>
              <span>Summary:</span> {props.summary}
            </li>
            <li>
              <span>Available Jobs:</span> {props.available_jobs}
            </li>
          </ul>
          <div class="float-right">
            <Link to="/helpwantad">
              <button class="btn-success">wantads</button>
            </Link>
            <Link to="/work">
              <button class="btn-primary">jobs</button>
            </Link>
          </div>
        </div>
      </div>
    );
  } else if (props.card === "work") {
    return (
      <div className="card col-7 mb-5">
        <div class="card-body">
          <h4>Workers Wanted</h4>
          <ul>
            <li>
              <span>Location:</span> {props.location}
            </li>
            <li>
              <span>Wage Per Hour:</span> ${props.wage}
            </li>
            <li>
              <span>Housing Offered:</span> {props.housing.toString()}
            </li>
            <li>
              <span>Females?:</span> {props.female.toString()}
            </li>
          </ul>
          <div class="float-right">
            <Link to="/form/application">
              <button class="btn-success">apply</button>
            </Link>
            <button
              type="button"
              class=" btn-primary"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              details
            </button>
            <button class="btn-danger">delete</button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card col-7 mb-5">
        <div class="card-body">
          <h4>Work Resume</h4>
          <ul>
            <li>
              <span>Age:</span> {props.age}
            </li>
            <li>
              <span>Gender:</span> {props.gender}
            </li>
            <li>
              <span>Education Offered:</span> {props.education}
            </li>
            <li>
              <span>Trade:</span> {props.trade.toString()}
            </li>
            <li>
              <span>Available for Work?:</span> {props.available}
            </li>
          </ul>
          <div class="float-right">
            <Link to="/form/profile">
              <button class="btn-success">edit</button>
            </Link>
            <Link to="/form/profile">
              <button class="btn-primary">new</button>
            </Link>
            <button class="btn-danger">delete</button>
          </div>
        </div>
      </div>
    );
  }
};

export default ContentCard;
ContentCard.propTypes = {
  summary: PropTypes.string,
  available_jobs: PropTypes.number,
  experience: PropTypes.boolean,
  age: PropTypes.string,
  gender: PropTypes.string,
  educattion: PropTypes.string,
  trade: PropTypes.string,
  available: PropTypes.string,
  location: PropTypes.string,
  wage: PropTypes.number,
  housing: PropTypes.boolean,
  female: PropTypes.boolean
};
ContentCard.defaultProps = {
  summary: "Summary of the Industry should go here",
  available_jobs: 43,
  experience: "default skilled",
  age: "default family",
  gender: "default female",
  education: "default highschool",
  trade: false,
  available: "two weeks",
  location: "New York",
  wage: 5.35,
  housing: true,
  female: true
};
