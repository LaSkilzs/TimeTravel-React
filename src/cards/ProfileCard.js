import React from "react";
import Title from "../components/Title";

class ProfileCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: "",
      available_for_work: "",
      avatar: "",
      education: "",
      ethnicity: "",
      experience: "",
      gender: "",
      marital_status: "",
      name: "",
      religion: "",
      trade: false
    };
  }

  createProfile = e => {
    e.preventDefault();
    console.log(e);
  };

  render() {
    return (
      <div className="container pt-2">
        <div className="row card profile-container">
          <div className="col-md-8 col-md-offset-2 container">
            <Title title={"New Profile"} />
            <form className="form-row" onSubmit={this.createProfile}>
              <div className="form-group col-md-6">
                <label htmlFor="fname">First Name</label>
                <input
                  type="text"
                  id="fname"
                  className="form-control"
                  name="fname"
                  placeholder="first_name"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="lname">Last Name</label>
                <input
                  type="text"
                  id="lname"
                  className="form-control"
                  name="lname"
                  placeholder="last_name"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="ageGroup">What is your Age Group?</label>
                <select id="ageGroup" className="form-control" name="ageGroup">
                  <option value="">ageGroup</option>
                  <option value="family">family</option>
                  <option value="adult">adult</option>
                  <option value="youth">youth</option>
                </select>
              </div>

              <div className="form-group col-md-6">
                <label htmlFor="gender">What is your Gender?</label>
                <select id="gender" className="form-control" name="gender">
                  <option value="">gender</option>
                  <option value="female">female</option>
                  <option value="male">male</option>
                </select>
              </div>

              <div className="form-group col-md-6">
                <label htmlFor="marital_status">Are you married?</label>
                <select
                  id="marital_status"
                  className="form-control"
                  name="marital_status"
                >
                  <option value="">marital_status</option>
                  <option value="single">single</option>
                  <option value="married">married</option>
                  <option value="widowed">widowed</option>
                  <option value="divorced">divorced</option>
                </select>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="education">
                  Highest level of education completed?
                </label>
                <select
                  id="education"
                  className="form-control"
                  name="education"
                >
                  <option value="">education</option>
                  <option value="highschool">highschool</option>
                  <option value="college">college</option>
                  <option value="some_education">some_education</option>
                  <option value="uneducated">uneducated</option>
                </select>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="available_for_work">When can you start?</label>
                <input
                  type="date"
                  id="avaiable_for_work"
                  className="form-control"
                  name="avaiable_for_work"
                  placeholder="avaiable_for_work"
                />
              </div>

              <div className="form-group col-md-6">
                <label htmlFor="trade">Have you learned a trade?</label>
                <select className="form-control" name="trade">
                  <option value="">trade</option>
                  <option value="true">true</option>
                  <option value="false">false</option>
                </select>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="experience">
                  What is your experience level?
                </label>
                <select
                  id="experience"
                  className="form-control"
                  name="experience"
                >
                  <option value="">experience</option>
                  <option value="skilled">skilled</option>
                  <option value="semiskilled">semiskilled</option>
                  <option value="kindred">kindred</option>
                  <option value="professional">professional</option>
                  <option value="laborer">laborer</option>
                </select>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="image">Profile picture?</label>
                <input
                  type="text"
                  id="image"
                  className="form-control"
                  name="image"
                  placeholder="selfie"
                />
              </div>
              <div className="form-group col-md-6 offset-md-5">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileCard;
