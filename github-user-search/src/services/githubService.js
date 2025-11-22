import axios from 'axios';


const  fetchUserData= (username)=>
{//returning the ressult of the call
   return  axios.get(`https://api.github.com/users/${username}`);

};

export default fetchUserData;

