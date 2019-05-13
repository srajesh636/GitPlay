import Config from "../config";

export let getUsers = user => {
  return fetch(Config.API_ENDPOINT + "/search/users?q=" + user)
    .then(res => {
      return res.json();
    })
    .then(res => res)
    .catch(err => console.log(err));
};

export let getUserDetails = user =>{
  return fetch(Config.API_ENDPOINT + "/users/" + user)
  .then(res => {
    return res.json();
  })
  .then(res => res)
  .catch(err => console.log(err));
}

export let getUserRepositories = user =>{
  return fetch(Config.API_ENDPOINT + "/users/" + user + '/repos')
  .then(res => {
    return res.json();
  })
  .then(res => res)
  .catch(err => console.log(err));
}
