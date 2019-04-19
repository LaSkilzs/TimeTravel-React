import React, { Component } from "react";
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Container from "./containers/Container";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Container />
      </div>
    );
  }
}

export default App;
