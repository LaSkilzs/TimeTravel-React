import React from "react";
import Title from "../components/Title";

const ApplicationCard = props => {
  return (
    <div className="container pt-4">
      <div className="row card">
        <div className="col-md-8 col-md-offset-2 container">
          <Title title={"New Application"} />
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="jobtitle">Job Title</label>
              <input
                type="text"
                id="job-title"
                className="form-control"
                name="job-title"
                placeholder="job_title"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="citizenship">Are you a US Citizen?</label>
              <select className="form-control">
                <option value="">citizenship</option>
                <option value="true">true</option>
                <option value="false">false</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputEmail4">Are your parents married?</label>
              <select className="form-control">
                <option value="">parent_union</option>
                <option value="true">true</option>
                <option value="false">false</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputPassword4">
                Do your parents know a trade?
              </label>
              <select className="form-control">
                <option value="">parent_trade</option>
                <option value="true">true</option>
                <option value="false">false</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputEmail4">
                Do your parents own their business?
              </label>
              <select className="form-control">
                <option value="">entreprenuership</option>
                <option value="true">true</option>
                <option value="false">false</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputPassword4">
                Do you work well with others
              </label>
              <select className="form-control">
                <option value="">work_with_others</option>
                <option value="true">true</option>
                <option value="false">false</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputEmail4">
                Are you able do repetitive tasks?
              </label>
              <select className="form-control">
                <option value="">montonous_task</option>
                <option value="true">true</option>
                <option value="false">false</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputPassword4">Can you work 40hrs weekly?</label>
              <select className="form-control">
                <option value="">work_life_balance</option>
                <option value="true">true</option>
                <option value="false">false</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputEmail4">Can you work 60hrs+ weekly?</label>
              <select className="form-control">
                <option value="">overtime?</option>
                <option value="true">true</option>
                <option value="false">false</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputPassword4">
                Where are you able to work?
              </label>
              <select
                id="work_location"
                className="form-control"
                name="work_location"
              >
                <option value="">work_location</option>
                <option value="central">central</option>
                <option value="northern">northern</option>
                <option value="southern">southern</option>
                <option value="western">western</option>
                <option value="new_england">new_england</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="status">Application Status</label>
              <select id="status" className="form-control" name="status">
                <option value="">status</option>
                <option value="applied">applied</option>
                <option value="interview">interview</option>
                <option value="denied">denied</option>
                <option value="hired">hired</option>
                <option value="unqualified">unqualified</option>
              </select>
            </div>
            {/* <div className="form-group col-md-6">
              <label htmlFor="application_score">Application Score</label>
              <input
                type="number"
                className="form-control"
                id="app_score"
                placeholder="0"
              />
            </div> */}
            <div className="form-group col-md-6">
              <label htmlFor="helpwanted_id">Helpwanted Application Id</label>
              <input
                type="number"
                className="form-control"
                id="helpwanted_id"
                placeholder="helpwanted_id"
              />
            </div>
            <div className="form-group col-md-6 offset-md-5 py-5">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationCard;
