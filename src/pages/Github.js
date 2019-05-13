import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import UsersList from "../components/UsersList";


class Github extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="search-container d-flex">
          <div className="container w-100 d-flex justify-content-center align-items-center">
            <div className="row w-100 justify-content-center">
              <h2 className="text-white font-weight-bold text-center">
                Explore projects from Github community.
              </h2>
              <div className="mt-3 col-12 d-flex justify-content-center">
                <SearchBar />
              </div>
            </div>
          </div>
        </div>
        <div className="users-list-container">
          <div className="container p-5">
            <UsersList />
          </div>
        </div>
      </>
    );
  }
}

export default Github;
