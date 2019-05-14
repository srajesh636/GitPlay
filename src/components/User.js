import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editUserName: false,
      newUserName:''
    };
  }

  deleteUser = () => {
    this.props.dispatch({
      type: "DELETE_USER",
      payload: this.props.data
    });
  };

  onChangeHandler = (e) =>{
    this.setState({
      newUserName:e.target.value
    })
  }

  updateUserName = () =>{
    this.setState({
      editUserName:false
    })
    let users = this.props.store.usersList.items;
    let currentIndex = users.indexOf(this.props.data);

    users[currentIndex] = {...this.props.data,userName:this.state.newUserName}

    this.props.dispatch({
      type:'UPDATE_USERNAME',
      payload:users
    })

  }

  onClickHandler = () =>{
    debugger;
    this.props.dispatch({
      type: "CURRENT_USER",
      payload: this.props.data
    });
  }

  render() {
    let data = this.props.data;
    let currentUser =this.props.store.currentUser

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
            {this.state.editUserName ? (
              <div className="d-flex align-items-center h-100">
              <input className="border-none input-username" onChange={this.onChangeHandler}/>
              <button className="ml-3 btn btn-primary" onClick={this.updateUserName}>Submit</button>
              </div>
            ) : (
              <div>
                <h3 className="font-weight-bold">{data.userName ? data.userName : data.login}</h3>
                <div className="d-flex">
                  <Link to={`/user/${data.login}`}>
                    <p className="text-primary" onClick={this.onClickHandler}>View</p>
                  </Link>
                  <p
                    className="text-primary ml-2"
                    onClick={() => {
                      this.setState({ editUserName: true });
                    }}
                  >
                    {" "}
                    | &nbsp; Edit Username
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className="col-1">
            <p
              className="w-100 text-right text-secondary"
              onClick={this.deleteUser}
            >
              <small className="text-danger">
                <i className="fas fa-trash-alt h5 font-weight-light" />
              </small>
            </p>
          </div>
        </div>

        <hr />
      </>
    );
  }
}
const mapStateToProps = state =>{
  return{
    store:state
  }
}
export default connect(mapStateToProps)(User);
