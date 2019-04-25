import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Applications from "../containers/Applications";

const ContentCard = ({
  card,
  industry,
  helpwanted,
  profile,
  getJobs,
  switchButton,
  goReset
}) => {
  if (card === "home") {
    return (
      <div className="card col-7 mb-5">
        <div className="card-body">
          <h4>Industry Summary</h4>
          <ul>
            <li>
              <span>Generation:</span> {"Progressive Era"}
            </li>
            <li>
              <span>Summary:</span> {industry.summary}
            </li>
            <li>
              <span>Available Jobs:</span> {industry.available_jobs}
            </li>
          </ul>
          <div className="float-right">
            {switchButton ? (
              <button className="btn-primary" onClick={e => goReset()}>
                back
              </button>
            ) : (
              <button className="btn-primary" onClick={() => getJobs(industry)}>
                industry jobs
              </button>
            )}
          </div>
        </div>
      </div>
    );
  } else if (card === "work") {
    return (
      <div className="card col-7 mb-5">
        <div className="card-body">
          <h4>Workers Wanted</h4>
          <ul>
            <li>
              <span>Location:</span> {helpwanted.location}
            </li>
            <li>
              <span>Wage Per Hour:</span> ${helpwanted.wage_per_week}
            </li>
            <li>
              <span>Housing Offered:</span>
              {helpwanted.housing_offered.toString()}
            </li>
            <li>
              <span>Females?:</span> {helpwanted.female.toString()}
            </li>
          </ul>
          <div className="float-right">
            <Applications type="helpwanted" />
            <Link to="/jobs">
              <button className="btn-primary">save</button>
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card col-7 mb-5">
        <div className="card-body">
          <h4>Work Resume</h4>
          <ul>
            <li>
              <span>Age:</span> {profile.age}
            </li>
            <li>
              <span>Gender:</span> {profile.gender}
            </li>
            <li>
              <span>Education Offered:</span> {profile.education}
            </li>
            <li>
              <span>Trade:</span> {profile.trade.toString()}
            </li>
            <li>
              <span>Available for Work?:</span> {profile.available}
            </li>
          </ul>
          <div className="float-right">
            <Link to="/form/profile">
              <button className="btn-primary">edit</button>
            </Link>
            <Applications type="profile" />
            <button className="btn-danger">delete</button>
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
  age: PropTypes.string,
  gender: PropTypes.string,
  educattion: PropTypes.string,
  trade: PropTypes.string,
  available: PropTypes.string,
  location: PropTypes.string,
  wage: PropTypes.number,
  housing_offered: PropTypes.string,
  female: PropTypes.string
};
ContentCard.defaultProps = {
  summary: "Summary of the Industry should go here",
  available_jobs: 43,
  age: "default family",
  gender: "default female",
  education: "default highschool",
  trade: "false",
  available: "two weeks",
  location: "New York",
  wage: 5.35,
  housing: "true",
  female: "true"
};
