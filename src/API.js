class API {
  static async loadData() {
    const resIndy = await fetch("http://localhost:3000/api/v1/industries");
    const resJobs = await fetch("http://localhost:3000/api/v1/jobs");
    const resHelp = await fetch("http://localhost:3000/api/v1/helpwanteds");
    const industries = await resIndy.json();
    const jobs = await resJobs.json();
    const helpwanteds = await resHelp.json();
    console.log(industries);
    console.log(jobs);
    console.log(helpwanteds);
    return { industries, jobs, helpwanteds };
  }
  static async createProfile(profile) {
    console.log("createProfile", profile);
    const response = await fetch("http://localhost:3000/api/v1/profiles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(profile)
    });
    const data = await response.json();
    console.log("createProfile response", data);
    return data;
  }
  static async createApplication(application) {
    console.log("createapplication", application);
    const response = await fetch("http://localhost:3000/api/v1/applications", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(application)
    });
    const data = await response.json();
    console.log("createapplication response", data);
    return data;
  }
  static async createUser(user) {
    console.log("createuser", user);
    const response = await fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    });
    const data = await response.json();
    console.log("createuser response", data);
    return data;
  }
  static async login(user) {
    console.log("createuser", user);
    const response = await fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    });
    const data = await response.json();
    console.log("createuser response", data);
    return data;
  }
  static async getJobsByIndustry(industry) {
    const response = await fetch(
      `http://localhost:3000/api/v1/industries/${industry.id}/filtered`
    );
    const data = await response.json();
    console.log("filtered jobs", data);
    return data;
  }
  static async getHelpwantedsByJobs(job) {
    const response = await fetch(
      `http://localhost:3000/api/v1/jobs/${job.id}/filtered`
    );
    const data = await response.json();
    console.log("filtered helpwanted", data);
    return data;
  }

  // PATCH METHODS

  static async editProfile(profile) {
    console.log("createProfile", profile);
    const response = await fetch(
      `http://localhost:3000/api/v1/profile/${profile.id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(profile)
      }
    );
    const data = await response.json();
    console.log("createProfile response", data);
    return data;
  }
  static async editApplication(application) {
    console.log("createApplication", application);
    const response = await fetch(
      `http://localhost:3000/api/v1/Application/${application.id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(application)
      }
    );
    const data = await response.json();
    console.log("createApplication response", data);
    return data;
  }
  static async editUser(user) {
    console.log("createUser", user);
    const response = await fetch(
      `http://localhost:3000/api/v1/user/${user.id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
      }
    );
    const data = await response.json();
    console.log("createUser response", data);
    return data;
  }

  static async prev(url) {
    console.log("prev", url);
    const response = await fetch(`${url}`);
    const data = await response.json();
    console.log("prev paginate", data);
    return data;
  }
  static async next(url) {
    console.log("next", url);
    const response = await fetch(`${url}`);
    const data = await response.json();
    console.log("next paginate", data);
    return data;
  }
}

export default API;
