import React, { Component } from "react";

import axios from "axios";
import ListNember from "./ListNember";

class DetailProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      dec: "",
      idProject: "",
      data: [],
      listNember: []
    };
  }

  componentWillMount() {
    axios
      .get(`/api/projects/${this.props.match.params.id_project}`)
      .then(res => {
        this.setState({
          name: res.data.name,
          dec: res.data.dec,
          idProject: res.data._id.toString(),
          listNember: res.data.listNember
        });
      })
      .catch(res => console.log(res.response.data));

    axios
      .get("/api/nembers")
      .then(res => {
        this.setState({
          data: res.data
        });
      })
      .catch(res => console.log(res.response.data));
  }
  acceptsListNember = (detail, name) => {
    this.setState({
      listNember: detail.listNember
    });
    console.log(this.state.listNember);
  };
  displayListNember = () => {};
  render() {
    const listNem = this.state.data.map((ele, index) => {
      return (
        <ListNember
          key={index}
          name={ele.name}
          phone={ele.phone}
          id={ele._id.toString()}
          idProject={this.state.idProject}
          accepList={this.acceptsListNember}
        />
      );
    });
    const lisNem = this.state.listNember.map((ele, index) => {
      return (
        <button key={index} className="btn btn-large btn-block btn-info">
          {ele.name}
        </button>
      );
    });
    return (
      <div className="row">
        <div className="col-6">
          <div className=" mb-2 ">
            <div className="card">
              <a href="https://placeholder.com">
                <img
                  src="http://via.placeholder.com/320x100"
                  className="img-thumbnail"
                  alt="alt"
                />
              </a>
              <div className="card-body">
                <h5 className="card-title">{this.state.name}</h5>
                <p className="card-text">{this.state.dec}</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header bg-success">
              Các nembers trong project
            </div>
            <div className="card-body">{lisNem}</div>
          </div>
        </div>
        <div className="col-6">{listNem}</div>
      </div>
    );
  }
}

export default DetailProject;
