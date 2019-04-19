import React from "react";

const Title = props => {
  return (
    <h1 id="title" className="display-4 text-center maintitle">
      {props.title}
    </h1>
  );
};

export default Title;
