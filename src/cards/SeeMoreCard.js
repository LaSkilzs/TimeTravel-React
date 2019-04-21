import React from "react";
import PropTypes from "prop-types";

const SeeMoreCard = props => {
  return (
    // <div className="card">
    //   <div className="card-body seemore">
    //     <div className="container see-content">
    <React.Fragment>
      {/* <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModalCenter"
      >
        details
      </button> */}

      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Avg Statistics of {props.name}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
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
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
              >
                hide
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
    //     </div>
    //   </div>
    // </div>
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
