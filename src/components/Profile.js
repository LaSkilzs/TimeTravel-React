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
              handleHelpwanted={props.handleHelpwanted}
              getJobs={props.getJobs}
              switchButton={props.switchButton}
              goReset={props.goReset}
              getHelpwanteds={props.getHelpwanteds}
              // switchHelpButton={props.switchHelpButton}
              // goResetHelpWanted={props.goReset}
              // job={props.job}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
