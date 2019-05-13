import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Search from "@material-ui/icons/Search";
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { getUsers } from "../helpers/api";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  textfield: {
    backgroundColor: "white !important",
    width: "75%",
    justifyContent: "center",
    borderRadius: "7px",
    marginTop: 16
  }
});

class SearchBar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ""
    };
  }

  onChangeHandler = e => {
    this.setState({
      keyword: e.target.value
    });
  };

  onClickHandler = async () => {
    let usersList = await getUsers(this.state.keyword);
    this.props.dispatch({
      type: "SET_USERS",
      payload: await usersList
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="w-100 d-flex justify-content-center">
        <TextField
          id="filled-adornment-password"
          className={classes.textfield}
          variant="filled"
          label="Search User"
          value={this.state.keyword}
          onChange={this.onChangeHandler}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => {
                    this.onClickHandler();
                  }}
                >
                  <Search />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    store: state
  };
};

export default connect(mapStateToProps)(withStyles(styles)(SearchBar));
