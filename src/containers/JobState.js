import React from "react";
import JobCard from "../cards/JobCard";
import Title from "../components/Title";
import Manager from "../components/Manager";
import Pagination from "../components/Pagination";
import API from "../API";

class JobState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      title: "Find Work",
      card: "job",
      showDetails: false,
      paginate: []
    };
  }
  handleDetails = () => {
    this.setState({ showDetails: !this.state.showDetails });
  };

  async componentDidMount() {
    const response = await fetch("http://localhost:3000/api/v1/jobs");
    const jobs = await response.json();
    this.setState({
      jobs: jobs.jobs,
      paginate: jobs.pagination
    });
  }

  handlePrev = e => {
    e.preventDefault();
    if (this.state.paginate.current_page) {
      API.prev(this.state.paginate.prev_page_url).then(data =>
        this.setState({
          jobs: data.jobs,
          paginate: data.pagination
        })
      );
    }
  };

  handleNext = e => {
    e.preventDefault();
    if (this.state.paginate.current_page) {
      API.next(this.state.paginate.next_page_url).then(data =>
        this.setState({
          jobs: data.jobs,
          paginate: data.pagination
        })
      );
    }
  };

  render() {
    console.log(this.state.jobs);
    return (
      <div id="job-container">
        <Title title={this.state.title} />
        <Manager />
        <Pagination handleNext={this.handleNext} handlePrev={this.handlePrev} />
        <section id="jobcard">
          <div className="title-changers" />
          <div className="m-3 employmentsection">
            <div className="job-container">
              <div id="jobs-section" className="row card">
                {this.state.jobs.map(job => {
                  return (
                    <JobCard
                      showDetailsCard={this.state.showDetails}
                      handleDetails={this.handleDetails}
                      key={job.id}
                      job={job}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <Pagination
            handleNext={this.handleNext}
            handlePrev={this.handlePrev}
          />
        </section>
      </div>
    );
  }
}

export default JobState;
