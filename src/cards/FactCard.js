import React from "react";

const FactCard = props => {
  return (
    <React.Fragment>
      <div className="card-header">Fetched Fact and Number</div>
      <div className="facts card-body">
        <blockquote className="blockquote mb-0">
          <p>Fetched Data</p>
        </blockquote>
      </div>
    </React.Fragment>
  );
};

export default FactCard;
