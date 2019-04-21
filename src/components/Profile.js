import React from "react";
import ImageCard from "../cards/ImageCard";
import ContentCard from "../cards/ContentCard";
const Profile = props => {
  console.log(props);
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <div id="state-image" className="row">
            <ImageCard
              card={props.card}
              industry={props.industry}
              helpwanted={props.helpwanted}
              profile={props.profile}
            />
            <ContentCard
              card={props.card}
              industry={props.industry}
              helpwanted={props.helpwanted}
              profile={props.profile}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
