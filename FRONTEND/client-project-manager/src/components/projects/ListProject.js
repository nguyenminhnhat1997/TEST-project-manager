import React, { Component } from "react";
import { Link } from "react-router-dom";
class ListProject extends Component {
  render() {
    return (
      <div className="col-4 float-left mb-2">
        <div className="card">
          <a href="https://placeholder.com">
            <img
              src="http://via.placeholder.com/233x100"
              className="img-thumbnail"
              alt="alt"
            />
          </a>
          <div className="card-body">
            <h5 className="card-title">{this.props.name}</h5>
            <p className="card-text">{this.props.dec}</p>
            <Link
              to={`/project/${this.props.idProject}`}
              className="btn btn-primary"
            >
              Xem chi tiết
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ListProject;
