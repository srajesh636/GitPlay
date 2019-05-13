import React from "react";
import { connect } from "react-redux";
import moment from "moment";

class RepoDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let repo = this.props.store.currentRepo;
    console.log(this.props.store);
    console.log(repo);
    return (
      <div className="container p-5">
        <div className="row">
          <div className="col-3">
            <img
              src={repo.owner.avatar_url}
              className="img-fluid rounded"
              alt="profile"
            />
            <h3 className="mt-4 font-weight-bold  pb-3 border-bottom">
              {repo.owner.login}
            </h3>
          </div>
          <div className="col-9 px-5">
            <h6 className="font-weight-bold text-blue">Repository Overview</h6>
            <hr />
            <h6 className="pt-3 text-secondary">
              Description :{" "}
              <span className="text-dark">{repo.description}</span>
            </h6>
            <h6 className="pt-3 text-secondary">
              {" "}
              Title : <span className="text-dark">{repo.name}</span>
            </h6>
            <h6 className="pt-3 text-secondary">
              Language : <span className="text-dark">{repo.language}</span>
            </h6>
            <h6 className="pt-3 text-secondary">
              Created time :{" "}
              <span className="text-dark">
                {moment(repo.created_at).format("MMMM Do YYYY, h:mm:ss a")}
              </span>
            </h6>
            <br />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    store: state
  };
};
export default connect(mapStateToProps)(RepoDetails);
