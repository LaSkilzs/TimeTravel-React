import React from "react";
import Title from "../components/Title";
import Profile from "../components/Profile";
import Pagination from "../components/Pagination";
import FactState from "./FactState";
import JobCard from "../cards/JobCard";

class ProfileState extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      profiles: [],
      title: "Profile Page",
      job: { name: "Hi", industry: "whats good", description: "what tthe fuck" }
    };
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:3000/api/v1/profiles");
    const profiles = await response.json();
    this.setState({ profiles });
  }
  render() {
    console.log(this.state.profiles);
    let profile = this.state.profiles.map(profile => {
      return <Profile profile={profile} key={profile.id} />;
    });
    return (
      <React.Fragment>
        <FactState />
        <Title title={this.state.title} />
        {profile[0]}
        <Pagination />
        <JobCard job={this.state.job} />
        <Pagination />
      </React.Fragment>
    );
  }
}

export default ProfileState;
