import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const JobCard = ({ showDetailsCard, job }) => {
  if (!showDetailsCard) {
    return (
      <React.Fragment>
        <div className="row card">
          <div className="jobcard card-body">
            <div className="">
              <h2>{job.name}</h2>
              <h4>{job.industry}</h4>
              <p>{job.job_description}</p>
            </div>
            <div className="float-right">
              <Link to="/work">
                <button
                  className="btn-success"
                  onClick={() => console.log("jobcard", job)}
                >
                  wantads
                </button>
              </Link>
              <button
                type="button"
                className=" btn-primary"
                data-toggle="modal"
                data-target="#exampleModalCenter"
              >
                details
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
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
