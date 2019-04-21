class API {
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
}
