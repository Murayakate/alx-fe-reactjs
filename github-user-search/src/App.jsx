import SearchBar from './components/Search';
import UserCard from './components/UserCard';
import FetchUserData from './services/githubService';
import {useState} from 'react';

function App() {
 const [userData,setUserData]=useState(null);
 const [loading,setLoading]=useState(false);
 const [error,setError]=useState(null);

const handleSearch =async function(username) {

console.log(`Search starting for ${username}`);
  setLoading(true);
  setError(null);
  setUserData(null);
  try{
    const response=await FetchUserData(username);
    console.log ('api response:',response);
    setUserData(response.data);

  }
  catch (err){
    console.log('api error;',err);
    setError(true);

  }

  finally{
    setLoading(false);
  }
}
  return (
    <>
     <SearchBar onSearch={handleSearch}/>
     {loading && <p>loading.....</p>}
     {error && <p>Sorry,we could not find this User</p>}


     <UserCard user={userData}/>
     
     


    </>
  )
}

export default App
