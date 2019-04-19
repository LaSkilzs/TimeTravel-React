import React from "react";
import FactCard from "../cards/FactCard";

class FactState extends React.Component {
  render() {
    return (
      <section id="funfacts">
        <div className="main-allfacts container m-4">
          <div id="facts" className="allfacts card">
            <FactCard />
          </div>
        </div>
      </section>
    );
  }
}

export default FactState;
