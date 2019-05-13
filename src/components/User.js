import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  deleteUser = () => {
    this.props.dispatch({
      type: "DELETE_USER",
      payload: this.props.data
    });
  };
  render() {
    let data = this.props.data;
    return (
      <>
        <div className="row mt-2 py-4">
          <div className="col-2">
            <img
              src={data.avatar_url}
              className="img-fluid rounded sm-pr-3"
              alt="github"
              width="100px"
              style={{ minHeight: 40, minWidth: 40 }}
            />
          </div>
          <div className="col-9">
            <h3 className="font-weight-bold">{data.login}</h3>
            <Link to={`/user/${data.login}`}>
              <p className="text-primary">View</p>
            </Link>
          </div>
          <div className="col-1">
            <p
              className="w-100 text-right text-secondary"
              onClick={this.deleteUser}
            >
              <small className="text-danger">
                <i class="fas fa-trash-alt h5 font-weight-light" />
              </small>
            </p>
          </div>
        </div>

        <hr />
      </>
    );
  }
}

export default connect()(User);
