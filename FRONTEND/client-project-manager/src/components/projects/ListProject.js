import React, { Component } from "react";

class ListProject extends Component {
  render() {
    console.log(this.props.idProject);
    return (
      <div className="col-4 float-left mb-2">
        <div className="card">
          <a href="https://placeholder.com">
            <img
              src="http://via.placeholder.com/233x100"
              className="img-thumbnail"
            />
          </a>
          <div className="card-body">
            <h5 className="card-title">{this.props.name}</h5>
            <p className="card-text">{this.props.dec}</p>
            <a href="" className="btn btn-primary">
              Xem chi tiết
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ListProject;
