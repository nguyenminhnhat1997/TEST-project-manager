import React, { Component } from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createNember } from "../../actionReducer/actionNember";
class FormNember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: ""
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
    const newNember = {};
    newNember.name = this.state.name;
    newNember.phone = this.state.phone;
    this.props.createNember(newNember, this.props.history);
  };
  render() {
    return (
      <div className="col-3">
        <div className="card">
          <div className="card-header bg-success">Tạo nember</div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Name</label>
                <input
                  className="form-control"
                  name="name"
                  placeholder="Enter name nember"
                  type="text"
                  onChange={event => {
                    this.handleOnChangeInput(event);
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Phone</label>
                <input
                  className="form-control"
                  placeholder="Enter phone"
                  name="phone"
                  type="number"
                  onChange={event => {
                    this.handleOnChangeInput(event);
                  }}
                />
              </div>
              <input
                className="btn btn-danger btn-block"
                type="reset"
                onClick={this.handleOnClickSubmit}
                value="Thêm"
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
  { createNember }
)(withRouter(FormNember));
