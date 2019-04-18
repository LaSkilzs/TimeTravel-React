import React, { Component } from "react";

class HomeState extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section id="main">
        <div class="main container">
          <h1 id="title" class="display-4 text-center maintitle" />
          <div class="container">
            <div class="card">
              <div class="card-body">
                <div id="state-image" class="row">
                  <div class="card col-5 mb-5">
                    <img class="m-2" src="../images/railroad.jpeg" alt="" />
                    <div class="card-body ">
                      <h4 class="card-subtitle">Fetched Industry</h4>
                    </div>
                  </div>
                  <div class="card col-7 mb-5">
                    <div class="card-body">
                      <h4>Workers Needed</h4>
                      <ul id="state-content">
                        <li>
                          <span>Gender:</span> Fetched
                        </li>
                        <li>
                          <span>Age:</span> Fetched
                        </li>
                        <li>
                          <span>Hours:</span> Fetched
                        </li>
                        <li>
                          <span>Wage per Week:</span> Fetched
                        </li>
                        <li>
                          <span>Work Environment:</span> Fetched
                        </li>
                        <li>
                          <span>Skill Level:</span> Fetched
                        </li>
                        <li>
                          <span>HS Diploma:</span> Fetched
                        </li>
                        <li>
                          <span>Housing:</span> Fetched
                        </li>
                      </ul>
                      <div class="float-right">
                        <button class="btn-success">show</button>
                        <button class="btn-primary">save</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section class="search">
            <div class="search-container">
              <hr />
              <div class="search-checkbox">
                <div class="box col-auto my-1">
                  <select class="mr-sm-2">
                    <option value="">Gender</option>
                    <option value="both">both</option>
                    <option value="female">female</option>
                    <option value="male">male</option>
                  </select>
                  <select class="mr-sm-2">
                    <option value="">Age Group</option>
                    <option value="adult">adult</option>
                    <option value="professional">family</option>
                  </select>
                  <select class="mr-sm-2">
                    <option value="">Wage</option>
                    <option value="high">by highest</option>
                    <option value="low">by lowest</option>
                  </select>
                  <select class="mr-sm-2">
                    <option value="">Industry</option>
                    <option value="agriculture">Agriculture</option>
                    <option value="manufacturing and mechanical">
                      Manufacturing and Mechanical
                    </option>
                    <option value="domestic and personal service">
                      Domestic and Personal Service
                    </option>
                    <option value="professional">Professional</option>
                    <option value="retail and trade">Retail and Trade</option>
                    <option value="transportation">Transportation</option>
                  </select>
                  <div class="skillbtn">
                    <button class="btn btn-outline-primary">
                      find by state
                    </button>
                  </div>
                  <hr />
                </div>
              </div>
              <hr />
              <div class="searchbar input-group mt-4">
                <div class="input-group-prepend">
                  <button class="btn btn-outline-success" type="button">
                    find by skill
                  </button>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="find by skill"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="New York"
                    />
                  </div>
                  <button class="btn btn-outline-primary">find by state</button>
                </div>
              </div>
              <hr />
            </div>
          </section>
          <section class="utility">
            <div class="space-maker" />
            <div class="mt-5">
              <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-end">
                  <li class="page-item disabled">
                    <a
                      class="page-link"
                      href="#"
                      tabindex="-1"
                      aria-disabled="true"
                    >
                      Previous
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <hr />

            <div class="title-changers" />
            <div class="m-3 employmentsection">
              <div class="job-container">
                <div id="jobs-section" class="row card" />
              </div>
            </div>
            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-end">
                <li class="page-item disabled">
                  <a
                    class="page-link"
                    href="#"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    Previous
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </section>
        </div>
      </section>
    );
  }
}

export default HomeState;
