import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Repo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onClickHandler = () => {
    this.props.dispatch({
      type: "CURRENT_REPO",
      payload: this.props.data
    });
    this.props.history.push(`/repo/${this.props.data.name}`);
  };

  render() {
    let data = this.props.data;
    return (
      <div className="p-4 border rounded">
        <h4 className="text-truncate">{data && data.name}</h4>
        <div className="d-flex align-items-center">
          <div className="circle bg-warning" />
          <p className="text-blue mt-3 ml-3"> {data && data.language}</p>
        </div>
        <p
          className="text-secondary mt-3 text-right"
          onClick={this.onClickHandler}
        >
          <small className="text-primary" style={{cursor:'default'}}>View</small>
        </p>
      </div>
    );
  }
}

export default connect()(withRouter(Repo));
