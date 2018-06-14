import React, { Component } from "react";
import axios from "axios";
class ListNember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      detailtProject: null
    };
  }

  componentWillMount() {
    // axios
    //   .get("/api/nembers")
    //   .then(res => {
    //     this.setState({
    //       data: res.data
    //     });
    //   })
    //   .catch(res => console.log(res.response.data));
  }
  handleOnClick = () => {
    axios
      .get(`/api/projects/${this.props.idProject}/${this.props.id}`)
      .then(res => {
        this.setState({
          detailtProject: res.data
        });
        this.props.accepList(this.state.detailtProject, this.props.name);
      })
      .catch(res => console.log(res.response.data));
  };

  render() {
    return (
      <li className="list-group-item mt-2">
        {"name : "}
        {this.props.name}
        {"  | phone: "}
        {this.props.phone}{" "}
        <button
          className="btn btn-danger float-right"
          onClick={this.handleOnClick}
        >
          Add
        </button>
      </li>
    );
  }
}

export default ListNember;
