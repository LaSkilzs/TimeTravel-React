import React from "react";

const ContentCard = () => {
  return (
    <div className="card col-7 mb-5">
      <div className="card-body">
        <h4>Workers Needed</h4>
        <ul id="state-content">
          <li>
            <span>Gender:</span> Fetched
          </li>
          <li>
            <span>Age:</span> Fetched
          </li>
          <li>
            <span>Hours:</span> Fetched
          </li>
          <li>
            <span>Wage per Week:</span> Fetched
          </li>
          <li>
            <span>Work Environment:</span> Fetched
          </li>
          <li>
            <span>Skill Level:</span> Fetched
          </li>
          <li>
            <span>HS Diploma:</span> Fetched
          </li>
          <li>
            <span>Housing:</span> Fetched
          </li>
        </ul>
        <div className="float-right">
          <button className="btn-success">show</button>
          <button className="btn-primary">save</button>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
