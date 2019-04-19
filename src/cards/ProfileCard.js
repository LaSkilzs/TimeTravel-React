import React from "react";

const ProfileCard = props => {
  return (
    <form>
      <div className="form-group row">
        <label
          htmlFor="full_name"
          className="col-md-4 col-form-label text-md-right"
        >
          Full Name
        </label>
        <div className="col-md-6">
          <input
            type="text"
            id="full_name"
            className="form-control"
            name="full-name"
          />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="age" className="col-md-4 col-form-label text-md-right">
          AgeGroup
        </label>
        <div className="col-md-6">
          <input
            type="text"
            id="ageGroup"
            className="form-control"
            name="ageGroup"
          />
        </div>
      </div>
      <div className="form-group row">
        <label
          htmlFor="gender"
          className="col-md-4 col-form-label text-md-right"
        >
          Gender
        </label>
        <div className="col-md-6">
          <input
            type="text"
            id="gender"
            className="form-control"
            name="gender"
          />
        </div>
      </div>

      <div className="form-group row">
        <label
          htmlFor="marital_status"
          className="col-md-4 col-form-label text-md-right"
        >
          Marital Status
        </label>
        <div className="col-md-6">
          <input type="text" id="marital_status" className="form-control" />
        </div>
      </div>

      <div className="form-group row">
        <label
          htmlFor="education"
          className="col-md-4 col-form-label text-md-right"
        >
          Education
        </label>
        <div className="col-md-6">
          <input type="text" id="education" className="form-control" />
        </div>
      </div>

      <div className="form-group row">
        <label
          htmlFor="available_for_work"
          className="col-md-4 col-form-label text-md-right"
        >
          Available for Work
        </label>
        <div className="col-md-6">
          <input
            type="text"
            id="available_for_work"
            className="form-control"
            name="available_for_work"
          />
        </div>
      </div>

      <div className="form-group row">
        <label
          htmlFor="trade"
          className="col-md-4 col-form-label text-md-right"
        >
          Trade
        </label>
        <div className="col-md-6">
          <input type="text" id="trade" className="form-control" name="trade" />
        </div>
      </div>
      <div className="form-group row">
        <label
          htmlFor="experience"
          className="col-md-4 col-form-label text-md-right"
        >
          experience
        </label>
        <div className="col-md-6">
          <input
            type="text"
            id="experience"
            className="form-control"
            name="experience"
          />
        </div>
      </div>
      <div className="form-group row">
        <label
          htmlFor="image"
          className="col-md-4 col-form-label text-md-right"
        >
          image
        </label>
        <div className="col-md-6">
          <input type="text" id="image" className="form-control" name="image" />
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

export default ProfileCard;
