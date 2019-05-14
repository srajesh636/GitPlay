export let reducer = (state, action) => {
  switch (action.type) {

    case "SET_USERS":
      return { ...state, usersList: action.payload };

    case "CURRENT_USER":
      return { ...state, currentUser: action.payload };

    case "USER_REPOS":
      return { ...state, userRepos: action.payload };

    case "CURRENT_REPO":
      return { ...state, currentRepo: action.payload };

    case "UPDATE_USERNAME":
      return {
        ...state,
        usersList: { ...state.usersList, items: action.payload }
      };

    case "DELETE_USER":
      let newUserList = state.usersList.items.filter(i => {
        return i.id !== action.payload.id;
      });
      return {
        ...state,
        usersList: { ...state.usersList, items: newUserList }
      };

    default:
      return state;
  }
};
