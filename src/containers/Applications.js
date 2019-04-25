import React from "react";
import ApplicationCard from "../cards/ApplicationCard";
import ProfileCard from "../cards/ProfileCard";

const Applications = props => {
  return (
    <React.Fragment>
      <button
        type="button"
        className="btn-success"
        data-toggle="modal"
        data-target="#exampleModalLong"
      >
        apply
      </button>
      <div
        className="modal fade bd-example-modal-lg"
        id="exampleModalLong"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              {props.title === "profile" ? (
                <ProfileCard />
              ) : (
                <ApplicationCard />
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Applications;
