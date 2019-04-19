import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import HomeState from "./containers/HomeState";
import FactState from "./containers/FactState";
import Form from "./containers/Form";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Navbar />
        <Home />
        <FactState />
        <HomeState />
        <Form />
      </div>
    );
  }
}

export default App;
