import React from "react";
import { connect } from "react-redux";
import User from "../components/User";

class UsersList extends React.PureComponent {
  constructor(props){
    super(props);
    this.state={
      usersList:this.props.store.usersList
    }
  }
  componentWillReceiveProps(nextProps){
    if(this.props.store.usersList){
        this.setState(
          {
            usersList:nextProps.store.usersList
          },()=>{console.log('hi lowda ',this.state.usersList)}
        )
    }
  }
  render() {
    let usersData = this.props.store.usersList;
    let usersList = usersData && usersData.items;
    let totalUsers = usersData && usersData.total_count;

    return (
      <div>
        <h3>{totalUsers && totalUsers + " Users found"}</h3>
        <hr />
        {usersList &&
          usersList.map(i => {
            return <User data={i} key={i.id} />;
          })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    store: state
  };
};
export default connect(mapStateToProps)(UsersList);
