import React from "react";
import PropTypes from "prop-types";

const FactCard = props => {
  return (
    <React.Fragment>
      <div className="card-header">Fact Number: {props.fact.id}</div>
      <div className="facts card-body">
        <blockquote className="blockquote mb-0">
          <p>{props.fact.fact}</p>
        </blockquote>
      </div>
    </React.Fragment>
  );
};

export default FactCard;

FactCard.propTypes = {
  fact_id: PropTypes.number,
  facts: PropTypes.string
};

FactCard.defaultProps = {
  fact_id: 0,
  facts: "An interesting fact was supposed to appear🤔"
};
