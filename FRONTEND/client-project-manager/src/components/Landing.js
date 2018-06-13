import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Manager Project</h1>
                <p className="lead"> Tạo user và quản lý project</p>
                <hr />
                <Link to="/create-nember" className="btn btn-lg btn-info mr-2">
                  Tạo nember
                </Link>
                <Link to="/create-project" className="btn btn-lg btn-light">
                  Tạo project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
