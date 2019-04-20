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
    let fact = this.state.facts.map(fact => <FactCard fact={fact} />);
    let rand = Math.floor(Math.random() * fact.length + 1);
    return (
      <section id="funfacts">
        <div className="main-allfacts container m-4">
          <div id="facts" className="allfacts card">
            {fact[rand]}
          </div>
        </div>
      </section>
    );
  }
}

export default FactState;
