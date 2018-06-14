import React, { Component } from "react";

class ListNember extends Component {
  render() {
    return (
      <div className="col-4 float-left mb-2">
        <div className="card" style={{ height: "240px" }}>
          <a href="https://placeholder.com">
            <img
              src="http://via.placeholder.com/233x100"
              className="img-thumbnail rounded-circle"
              alt=""
            />
          </a>
          <div className="card-body">
            <h5 className="card-title">Tên nember : {this.props.name}</h5>
            <p className="card-text">Phone : {this.props.phone}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ListNember;
