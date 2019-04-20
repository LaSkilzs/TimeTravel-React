import React from "react";
import JobCard from "../cards/JobCard";
import Title from "../components/Title";
import Utility from "../components/Utility";
import Pagination from "../components/Pagination";

class JobState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      applications: [],
      title: "Find Work"
    };
  }

  async componentDidMount() {
    const responseJ = await fetch("http://localhost:3000/api/v1/jobs");
    const responseA = await fetch("http://localhost:3000/api/v1/applications");
    const jobs = await responseJ.json();
    const applications = await responseA.json();
    this.setState({ jobs, applications });
  }

  render() {
    console.log(this.state.jobs);
    console.log(this.state.applications);
    return (
      <div id="job-container">
        <Title title={this.state.title} />
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
      </div>
    );
  }
}

export default JobState;
