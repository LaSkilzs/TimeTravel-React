import React from "react";
import JobCard from "../cards/JobCard";
import Title from "../components/Title";
import Utility from "../components/Utility";
import Pagination from "../components/Pagination";

const JobState = props => {
  return (
    <div id="job-container">
      {/* <div className="row"> */}
      <Title title={"Find Work"} />
      <Utility />
      <Pagination />
      <section id="jobcard">
        <div className="title-changers" />
        <div className="m-3 employmentsection">
          <div className="job-container">
            <div id="jobs-section" className="row card">
              <JobCard />
            </div>
          </div>
        </div>
        <Pagination />
      </section>
      {/* </div> */}
    </div>
  );
};

export default JobState;
