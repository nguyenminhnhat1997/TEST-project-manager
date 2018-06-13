import React, { Component } from "react";
import FormProject from "./FormProject";
import { getAllProject } from "../../actionReducer/actionProject";
import { connect } from "react-redux";
// import React, { Component } from 'react';
import ListProject from "./ListProject";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplay: true
    };
  }
  componentWillMount() {
    this.props.getAllProject();
  }
  handleOnClickDisplayForm = () => {
    this.setState({
      isDisplay: !this.state.isDisplay
    });
  };
  displayForm = () => {
    if (this.state.isDisplay) {
      return <FormProject />;
    }
  };
  render() {
    const { project } = this.props;
    const listProject = project.projects.map((ele, index) => {
      return (
        <ListProject
          key={index}
          name={ele.name}
          dec={ele.dec}
          idProject={ele._id.toString()}
        />
      );
    });
    return (
      <div className="row">
        <div className="col-9">
          <div className="col-12">
            {" "}
            <button
              type="button"
              className="btn btn-info mb-3 ml-3"
              onClick={this.handleOnClickDisplayForm}
            >
              Thêm project
            </button>
          </div>
          <div className="col-12">{listProject}</div>
        </div>
        {this.displayForm()}
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    project: state.project
  };
};

export default connect(
  mapStateToProps,
  { getAllProject }
)(Project);
