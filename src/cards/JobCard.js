import React from "react";

const JobCard = props => {
  return (
    <div className="row card">
      <div className="jobcard card-body">
        <div className="">
          <h2>Title</h2>
          <h4>Industry</h4>
          <p>Description</p>
        </div>
        <div className="float-right">
          <button className="btn-success">view</button>
          <button className="btn-primary">apply</button>
          <button className="btn-danger">delete</button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
