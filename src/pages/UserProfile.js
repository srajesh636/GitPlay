import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserDetails } from "../helpers/api";
import RepositoryList from "../components/RepositoryList";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {}
    };
  }

  componentDidMount() {
    let userName = window.location.href.split("/")[4];
    if (userName) {
      this.props.dispatch({
        type: "CURRENT_USER",
        payload: userName
      });
      this.getUserData(userName);
    }
  }

  getUserData = async userName => {
    let userData = await getUserDetails(userName);
    this.setState({
      userData: await userData
    });
  };

  render() {
    let userData = this.state.userData;
    return (
      <div className="container p-5">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-12">
            <img
              src={userData.avatar_url}
              className="img-fluid rounded"
              alt="profile"
            />
            <h3 className="mt-4 font-weight-bold  pb-3 border-bottom">
              {userData.login}
            </h3>
          </div>
          <div className="col-lg-9 col-md-9 col-sm-12 px-5">
            <h6 className="font-weight-bold text-blue">Overview</h6>
            <hr />
            <h6 className="pt-5 text-secondary">
              Name : <span className="text-dark">{userData.name}</span>
            </h6>
            <h6 className="pt-5 text-secondary">
              {" "}
              Company : <span className="text-dark">{userData.company}</span>
            </h6>
            <h6 className="pt-5 text-secondary">
              Bio : <span className="text-dark">{userData.bio}</span>
            </h6>
            <br />
            <h6 className="font-weight-bold mt-5 text-blue">Repositories</h6>
            <hr />
            <RepositoryList userName={userData.login} />
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(UserProfile);
