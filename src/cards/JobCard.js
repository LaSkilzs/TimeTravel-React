import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import SeeMoreCard from "../cards/SeeMoreCard";

const JobCard = props => {
  return (
    <React.Fragment>
      <div className="row card">
        <div className="jobcard card-body">
          <div className="">
            <h2>{props.title}</h2>
            <h4>{props.industry}</h4>
            <p>{props.description}</p>
          </div>
          <div className="float-right">
            <Link to="/form/application">
              <button className="btn-success">apply</button>
            </Link>
            <button
              className="btn-primary"
              onClick={() => console.log("clicked")}
            >
              details
            </button>
            <button className="btn-danger">delete</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default JobCard;

JobCard.propTypes = {
  title: PropTypes.string,
  industry: PropTypes.string,
  description: PropTypes.string,
  name: PropTypes.string,
  location: PropTypes.string,
  wage: PropTypes.number
};
JobCard.defaultProps = {
  title: "Job Title",
  industry: "Industry",
  description: "Description",
  name: "Helpwanted Job Name",
  location: "Wisconsin",
  wage: 5.25
};
