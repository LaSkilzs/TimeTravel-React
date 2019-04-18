import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import HomeState from "./containers/HomeState";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Navbar />
        <Home />
        <HomeState />
      </div>
    );
  }
}

export default App;
