import axios from "axios";

const fetchUserData = ({ username, location, minRepos }) => {
  let query = username;

  if (location) {
    query += `+location:${location}`;
  }

  if (minRepos) {
    query += `+repos:>${minRepos}`;
  }
  
  console.log("Query:", query);

  return axios.get(`https://api.github.com/search/users?q=${query}`);
};

export default fetchUserData;
