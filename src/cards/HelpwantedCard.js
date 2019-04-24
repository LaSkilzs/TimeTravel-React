import React from "react";
import Title from "../components/Title";
import PropTypes from "prop-types";
import API from "../API";

class HelpwantedCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      citizenship: false,
      parent_trade: false,
      parent_union: false,
      entreprenuership: false,
      work_with_others: false,
      montonous_task: false,
      work_life_balance: false,
      work_environment: false,
      too_many_hours: false,
      app_score: 65,
      profile_id: 0,
      helpwanted_id: 0
    };
  }

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    // const application = this.state;
    // API.createApplication(application);
    this.setState({
      citizenship: false,
      parent_trade: false,
      parent_union: false,
      entreprenuership: false,
      work_with_others: false,
      montonous_task: false,
      work_life_balance: false,
      work_environment: false,
      too_many_hours: false,
      app_score: 65,
      profile_id: 0,
      helpwanted_id: 0
    });
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <React.Fragment>
        <button
          type="button"
          className="btn-success"
          data-toggle="modal"
          data-target="#exampleModalLong"
        >
          apply
        </button>

        <div
          class="modal fade bd-example-modal-lg"
          id="exampleModalLong"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <div className="container pt-4">
                  <div className="row card">
                    <div className="col-md-8 col-md-offset-2 container">
                      <Title title={"New Application"} />
                      <form onSubmit={e => this.onSubmit(e)}>
                        <div className="form-row">
                          <div className="form-group col-md-6">
                            <label htmlFor="jobtitle">Job Title</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="job_title"
                              name="job_title"
                              onChange={e => this.handleChange(e)}
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="citizenship">
                              Are you a US Citizen?
                            </label>
                            <select
                              className="form-control"
                              name="citizenship"
                              onChange={e => this.handleChange(e)}
                            >
                              <option value="">citizenship</option>
                              <option value="true">true</option>
                              <option value="false">false</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">
                              Are your parents married?
                            </label>
                            <select
                              className="form-control"
                              name="parent_union"
                              onChange={e => this.handleChange(e)}
                            >
                              <option value="">parent_union</option>
                              <option value="true">true</option>
                              <option value="false">false</option>
                            </select>
                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">
                              Do your parents know a trade?
                            </label>
                            <select
                              className="form-control"
                              name="parent_trade"
                              onChange={e => this.handleChange(e)}
                            >
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
                            <select
                              className="form-control"
                              name="entreprenuership"
                              onChange={e => this.handleChange(e)}
                            >
                              <option value="">entreprenuership</option>
                              <option value="true">true</option>
                              <option value="false">false</option>
                            </select>
                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">
                              Do you work well with others
                            </label>
                            <select
                              className="form-control"
                              name="work_with_others"
                              onChange={e => this.handleChange(e)}
                            >
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
                            <select
                              className="form-control"
                              name="montonous_task"
                              onChange={e => this.handleChange(e)}
                            >
                              <option value="">montonous_task</option>
                              <option value="true">true</option>
                              <option value="false">false</option>
                            </select>
                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">
                              Can you work 40hrs weekly?
                            </label>
                            <select
                              className="form-control"
                              name="work_life_balance"
                              onChange={e => this.handleChange(e)}
                            >
                              <option value="">work_life_balance</option>
                              <option value="true">true</option>
                              <option value="false">false</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">
                              Can you work 60hrs+ weekly?
                            </label>
                            <select
                              className="form-control"
                              name="too_many_hours"
                              onChange={e => this.handleChange(e)}
                            >
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
                              onChange={e => this.handleChange(e)}
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
                            <select
                              id="status"
                              className="form-control"
                              name="status"
                              onChange={e => this.handleChange(e)}
                            >
                              <option value="">status</option>
                              <option value="applied">applied</option>
                              <option value="interview">interview</option>
                              <option value="denied">denied</option>
                              <option value="hired">hired</option>
                              <option value="unqualified">unqualified</option>
                            </select>
                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="work_environment">
                              work_environment
                            </label>
                            <select
                              id="work_environment"
                              className="form-control"
                              name="work_environment"
                              onChange={e => this.handleChange(e)}
                            >
                              <option value="">work_environment</option>
                              <option value="applied">weathered</option>
                              <option value="interview">unweathered</option>
                              <option value="denied">mixed</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group col-md-6">
                          <input
                            type="hidden"
                            className="form-control"
                            name="helpwanted_id"
                            value={this.state.helpwanted_id}
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <input
                            type="hidden"
                            className="form-control"
                            name="profile_id"
                            value={this.state.profile_id}
                          />
                        </div>
                        <div className="form-group col-md-6 offset-md-5 py-5">
                          <button type="submit" className="btn btn-primary">
                            Register
                          </button>
                          <button
                            type="button"
                            class="btn btn-danger"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HelpwantedCard;

HelpwantedCard.propTypes = {
  helpwanted_id: PropTypes.number,
  profile_id: PropTypes.number,
  user_id: PropTypes.number
};
HelpwantedCard.defaultProps = {
  helpwanted_id: 0,
  profile_id: 0,
  user_id: 0
};
