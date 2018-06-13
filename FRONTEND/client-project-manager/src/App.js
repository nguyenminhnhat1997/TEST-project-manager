import React, { Component } from "react";

import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Project from "./components/projects/Project";
import Nember from "./components/nembers/Nember";
import axios from "axios";
import { connect } from "react-redux";
import { Provider } from "react-redux";
import store from "./store";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Nav />
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/create-nember" component={Nember} />
              <Route exact path="/create-project" component={Project} />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
