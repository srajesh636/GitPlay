import React from "react";
import { getUserRepositories } from "../helpers/api";
import { connect } from "react-redux";
import Repo from "../components/Repo";
class RepositoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    };
  }

  componentDidMount() {
    let userName = window.location.href.split("/")[4];
    this.getUserRepos(userName);
  }

  getUserRepos = async userName => {
    let userRepos = await getUserRepositories(userName);
    this.setState({
      repos: await userRepos
    });

    this.props.dispatch({
      type: "USER_REPOS",
      payload: await userRepos
    });
  };

  render() {
    let repos = this.state.repos;

    return (
      <div>
        <div className="mt-4">
          {repos &&
            repos.map((i, index) => {
              return (
                <div className="row mt-2 mb-2" key={index}>
                  {repos[index] && (
                    <div className="col-lg-6 col-md-6 col-sm-12 w-100 rounded">
                      <Repo data={repos[index]} />
                    </div>
                  )}
                  {repos[index + 1] && (
                    <div className="col-lg-6 col-md-6 col-sm-12 w-100 rounded">
                      <Repo data={repos[index + 1]} />
                    </div>
                  )}
                </div>
              );
            })}
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

export default connect(mapStateToProps)(RepositoryList);
