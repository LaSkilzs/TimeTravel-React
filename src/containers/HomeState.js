import React, { Component } from "react";
import Utility from "../components/Utility";
import ImageCard from "../cards/ImageCard";
import ContentCard from "../cards/ContentCard";
import Pagination from "../components/Pagination";
import JobState from "./JobState";
import Title from "../components/Title";

class HomeState extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section id="main">
        <div className="main container">
          <Title />
          <div className="container">
            <div className="card">
              <div className="card-body">
                <div id="state-image" className="row">
                  <ImageCard />
                  <ContentCard />
                </div>
              </div>
            </div>
          </div>
          <Utility />
          <Pagination />
          <JobState />
          <JobState />
          <JobState />
          <JobState />
          <Pagination />
        </div>
      </section>
    );
  }
}

export default HomeState;
