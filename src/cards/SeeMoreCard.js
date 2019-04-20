import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

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
        class="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Avg Statistics of {props.name}
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
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
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
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
