import React from "react";
import FactCard from "../cards/FactCard";

class FactState extends React.Component {
  constructor() {
    super();
    this.state = {
      facts: []
    };
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:3000/api/v1/funfacts");
    const facts = await response.json();
    this.setState({ facts });
  }
  render() {
    console.log(this.state.facts);
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
