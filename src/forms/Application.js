import React, { Component } from "react";
import ApplicationTitle from "./ApplicationTitle";
import ProfileCard from "../cards/ProfileCard";
import ApplicationCard from "../cards/ApplicationCard";

class Application extends Component {
  render() {
    return (
      <main className="my-form">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="card">
                <ApplicationTitle />
                <div className="card-body">
                  <ProfileCard />
                  {/* <ApplicationCard /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Application;
