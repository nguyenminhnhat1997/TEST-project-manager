import React, { Component } from "react";
import axios from "axios";
import { createProject } from "../../actionReducer/actionProject";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
class FormProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      dec: ""
    };
  }
  handleOnChangeInput = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };
  handleOnClickSubmit = () => {
    const newProject = {};
    newProject.name = this.state.name;
    newProject.dec = this.state.dec;
    this.props.createProject(newProject, this.props.history);
  };
  render() {
    return (
      <div className="col-3">
        <div className="card">
          <div className="card-header bg-success">Tạo project</div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Name</label>
                <input
                  className="form-control"
                  name="name"
                  placeholder="Enter name project"
                  type="text"
                  onChange={event => {
                    this.handleOnChangeInput(event);
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Describe</label>
                <input
                  className="form-control"
                  placeholder="Enter describe"
                  name="dec"
                  type="text"
                  onChange={event => {
                    this.handleOnChangeInput(event);
                  }}
                />
              </div>
              <input
                className="btn btn-danger btn-block"
                type="reset"
                onClick={this.handleOnClickSubmit}
                value=" Thêm"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { createProject }
)(withRouter(FormProject));
