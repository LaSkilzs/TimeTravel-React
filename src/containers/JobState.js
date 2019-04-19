import React from "react";
import JobCard from "../cards/JobCard";

const JobState = () => {
  return (
    <section id="jobcard">
      <div className="title-changers" />
      <div className="m-3 employmentsection">
        <div className="job-container">
          <div id="jobs-section" className="row card">
            <JobCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobState;
