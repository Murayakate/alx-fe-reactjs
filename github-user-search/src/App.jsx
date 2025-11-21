import SearchBar from './components/SearchBar';
import UserCard from './components/UserCard';
function App() {
 console.log('my secret key is',import.meta.env.VITE_GITHUB_API_KEY)
  return (
    <>
     <SearchBar/>
     <UserCard/>
     


    </>
  )
}

export default App
