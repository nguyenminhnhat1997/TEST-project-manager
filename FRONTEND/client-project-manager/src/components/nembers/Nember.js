import React, { Component } from "react";
import FormNember from "./FormNember";
import { connect } from "react-redux";
import ListNember from "./ListNembers";
import { getAllNember } from "../../actionReducer/actionNember";
class Nember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplay: true
    };
  }
  componentWillMount() {
    this.props.getAllNember();
  }
  handleOnClickDisplayForm = () => {
    this.setState({
      isDisplay: !this.state.isDisplay
    });
  };
  displayForm = () => {
    if (this.state.isDisplay) {
      return <FormNember />;
    }
  };
  render() {
    const { nember } = this.props;

    const listNember = nember.nembers.map((ele, index) => {
      return (
        <ListNember
          key={index}
          name={ele.name}
          phone={ele.phone}
          idNember={ele._id.toString()}
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
              Thêm nember
            </button>
          </div>
          <div className="col-12">{listNember}</div>
        </div>
        {this.displayForm()}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    nember: state.nember
  };
};
export default connect(
  mapStateToProps,
  { getAllNember }
)(Nember);
