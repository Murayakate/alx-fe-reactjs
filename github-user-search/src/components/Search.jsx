import React, { useState } from 'react';
import fetchUserData from '../services/githubService';
// We import the CSS file where we hid all the messy Tailwind classes
import styles from './SearchBar.module.css'; 

function Search() {
  // ==========================================
  // 1. THE MEMORY (STATE)
  // ==========================================
  
  // Holds the text from the "Username" input box
  const [username, setUsername] = useState('');
  
  // Holds the text from the "Location" input box
  const [location, setLocation] = useState('');
  
  // Holds the number from the "Min Repos" input box
  const [minRepos, setMinRepos] = useState('');
  
  // Holds the LIST of users we get back from GitHub. 
  // Initial value is [] (empty array) because we expect a list.
  const [userData, setUserData] = useState([]); 
  
  // Controls the "Searching..." text visibility
  const [loading, setLoading] = useState(false);
  
  // Controls the Error Message visibility
  const [error, setError] = useState(false);

  // ==========================================
  // 2. THE BRAIN (LOGIC)
  // ==========================================
  
  const handleSubmit = async (e) => {
    e.preventDefault(); // Stop the page from refreshing!
    
    setLoading(true);   // Turn spinner ON
    setError(false);    // Clear old errors
    setUserData([]);    // Clear old results

    try {
      // Call the service with our 3 search criteria
      const response = await fetchUserData({ username, location, minRepos });
      
      // SUCCESS: The Search API puts the list of users inside .items
      setUserData(response.data.items); 
      
    } catch (err) {
      // FAILURE: If internet fails or API breaks
      setError(true);
    } finally {
      // CLEANUP: Turn spinner OFF (runs whether success or fail)
      setLoading(false);
    }
  };

  // ==========================================
  // 3. THE BODY (UI / HTML)
  // ==========================================
  return (
    // We use 'styles.container' instead of writing 5 tailwind classes here
    <div className={styles.container}>
      
      <h1 className={styles.title}>
        GitHub <span className="text-blue-600">Finder</span>
      </h1>
      
      {/* --- FORM SECTION --- */}
      <form onSubmit={handleSubmit} className={styles.formWrapper}>
        
        {/* Username Input */}
        <div>
          <label className={styles.label}>Github Username</label>
          <input 
            type="text" 
            placeholder="e.g. octocat" 
            className={styles.inputField} 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        {/* Location & Repos Row (Side by Side) */}
        <div className={styles.row}>
          <div>
            <label className={styles.label}>Location</label>
            <input 
              type="text" 
              placeholder="e.g. Kenya" 
              className={styles.inputField}
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div>
            <label className={styles.label}>Minimum Repos</label>
            <input 
              type="number" 
              placeholder="e.g. 10" 
              className={styles.inputField}
              value={minRepos}
              onChange={(e) => setMinRepos(e.target.value)}
            />
          </div>
        </div>

        {/* The big gradient button */}
        <button type="submit" className={styles.searchBtn}>
          Search Profiles
        </button>
      </form>

      {/* --- RESULTS SECTION --- */}
      
      {/* Show Loading Text if loading is true */}
      {loading && <p className={styles.loading}>Searching GitHub...</p>}

      {/* Show Error Box if error is true */}
      {error && (
        <div className={styles.error}>
          <p>Something went wrong. Please check your internet or try again.</p>
        </div>
      )}
      
      {/* THE GRID OF CARDS */}
      <div className={styles.resultsGrid}>
        
        {/* We map over the list of users to create a card for each one */}
        {userData && userData.map((user) => (
          
          <div key={user.id} className={styles.userCard}>
            
            <img 
              src={user.avatar_url} 
              alt="avatar" 
              className={styles.avatar} 
            />
            
            <h2 className={styles.name}>{user.login}</h2>
            
            <a 
              href={user.html_url} 
              target="_blank" 
              rel="noreferrer" 
              className={styles.link}
            >
              View Profile &rarr;
            </a>
          
          </div>
        ))}
      </div>

    </div>
  );
}

export default Search;