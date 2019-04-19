import React from "react";
import ImageCard from "../cards/ImageCard";
import ContentCard from "../cards/ContentCard";
const Profile = props => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <div id="state-image" className="row">
            <ImageCard />
            <ContentCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
