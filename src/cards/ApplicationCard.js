import React from "react";

const ApplicationCard = props => {
  return (
    <form>
      <div className="form-group row">
        <label
          htmlFor="job-title"
          className="col-md-4 col-form-label text-md-right"
        >
          Job Title
        </label>
        <div className="col-md-6">
          <input
            type="text"
            id="job-title"
            className="form-control"
            name="job-title"
          />
        </div>
      </div>
      <div className="form-group row">
        <label
          htmlFor="citizenship"
          className="col-md-4 col-form-label text-md-right"
        >
          Citizenship
        </label>
        <div className="col-md-6">
          <input
            type="text"
            id="citizenship"
            className="form-control"
            name="citizenship"
          />
        </div>
      </div>
      <div className="form-group row">
        <label
          htmlFor="parent-union"
          className="col-md-4 col-form-label text-md-right"
        >
          Parent-Union
        </label>
        <div className="col-md-6">
          <input
            type="text"
            id="parent-union"
            className="form-control"
            name="parent-union"
          />
        </div>
      </div>
      <div className="form-group row">
        <label
          htmlFor="parent_trade"
          className="col-md-4 col-form-label text-md-right"
        >
          Parent Trade
        </label>
        <div className="col-md-6">
          <input type="text" id="parent_trade" className="form-control" />
        </div>
      </div>
      <div className="form-group row">
        <label
          htmlFor="entreprenuership"
          className="col-md-4 col-form-label text-md-right"
        >
          Entreprenuership
        </label>
        <div className="col-md-6">
          <input type="text" id="entreprenuership" className="form-control" />
        </div>
      </div>
      <div className="form-group row">
        <label
          htmlFor="work_with_others"
          className="col-md-4 col-form-label text-md-right"
        >
          Work with Others
        </label>
        <div className="col-md-6">
          <input
            type="text"
            id="work_with_others"
            className="form-control"
            name="work_with_others"
          />
        </div>
      </div>
      <div className="form-group row">
        <label
          htmlFor="monotous_task"
          className="col-md-4 col-form-label text-md-right"
        >
          Monotous Task
        </label>
        <div className="col-md-6">
          <input
            type="text"
            id="monotous_task"
            className="form-control"
            name="monotous_task"
          />
        </div>
      </div>
      <div className="form-group row">
        <label
          htmlFor="work_life_balance"
          className="col-md-4 col-form-label text-md-right"
        >
          Under 40 hours?
        </label>
        <div className="col-md-6">
          <input
            type="text"
            id="work_life_balance"
            className="form-control"
            name="experience"
          />
        </div>
      </div>
      <div className="form-group row">
        <label
          htmlFor="too_many_hours"
          className="col-md-4 col-form-label text-md-right"
        >
          Overtime?
        </label>
        <div className="col-md-6">
          <input
            type="text"
            id="too_many_hours"
            className="form-control"
            name="too_many_hours"
          />
        </div>
      </div>
      <div className="form-group row">
        <label
          htmlFor="work_location"
          className="col-md-4 col-form-label text-md-right"
        >
          Location
        </label>
        <div className="col-md-6">
          <input
            type="text"
            id="work_location"
            className="form-control"
            name="work_location"
          />
        </div>
      </div>
      <div className="form-group row">
        <label
          htmlFor="App Score"
          className="col-md-4 col-form-label text-md-right"
        >
          app score
        </label>
        <div className="col-md-6">
          <input
            type="text"
            id="App Score"
            className="form-control"
            name="App Score"
            value="0"
          />
        </div>
      </div>
      <div className="form-group row">
        <label
          htmlFor="helpwanted_id"
          className="col-md-4 col-form-label text-md-right"
        >
          Helpwanted Id
        </label>
        <div className="col-md-6">
          <input
            type="text"
            id="helpwanted_id"
            className="form-control"
            name="helpwanted_id"
          />
        </div>
      </div>
      <div className="form-group row">
        <label
          htmlFor="status"
          className="col-md-4 col-form-label text-md-right"
        >
          Application Status
        </label>
        <div className="col-md-6">
          <input
            type="text"
            id="status"
            className="form-control"
            name="status"
          />
        </div>
      </div>
      <div className="col-md-6 offset-md-4">
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </div>
    </form>
  );
};

export default ApplicationCard;
