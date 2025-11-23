import React, { useState } from 'react';
import fetchUserData from '../services/githubService';

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
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        
        <h1 className="text-5xl font-extrabold text-center mb-3 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
          GitHub Finder
        </h1>
        <p className="text-center text-slate-600 mb-10 text-lg">Discover developers around the world</p>
        
        {/* --- FORM SECTION --- */}
        <form 
          onSubmit={handleSubmit} 
          className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl space-y-6 border border-green-100 max-w-4xl mx-auto"
          aria-label="GitHub user search form"
        >
          
          {/* Username Input */}
          <div>
            <label 
              htmlFor="username" 
              className="block text-sm font-semibold text-slate-700 mb-2"
            >
              🔍 Github Username
            </label>
            <input 
              id="username"
              type="text" 
              placeholder="e.g. octocat" 
              className="w-full p-4 bg-green-50/50 border-2 border-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              aria-describedby="username-help"
            />
            <span id="username-help" className="sr-only">
              Enter a GitHub username to search for
            </span>
          </div>

          {/* Location & Repos Row (Side by Side) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label 
                htmlFor="location" 
                className="block text-sm font-semibold text-slate-700 mb-2"
              >
                📍 Location
              </label>
              <input 
                id="location"
                type="text" 
                placeholder="e.g. Kenya" 
                className="w-full p-4 bg-green-50/50 border-2 border-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                aria-describedby="location-help"
              />
              <span id="location-help" className="sr-only">
                Filter users by location
              </span>
            </div>
            <div>
              <label 
                htmlFor="minRepos" 
                className="block text-sm font-semibold text-slate-700 mb-2"
              >
                📦 Minimum Repos
              </label>
              <input 
                id="minRepos"
                type="number" 
                placeholder="e.g. 10" 
                className="w-full p-4 bg-green-50/50 border-2 border-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                value={minRepos}
                onChange={(e) => setMinRepos(e.target.value)}
                aria-describedby="minrepos-help"
              />
              <span id="minrepos-help" className="sr-only">
                Filter users by minimum number of repositories
              </span>
            </div>
          </div>

          {/* The big gradient button */}
          <button 
            type="submit" 
            className="w-full py-4 px-8 text-white text-lg font-bold rounded-xl shadow-xl bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 hover:shadow-2xl hover:scale-[1.02] hover:from-green-700 hover:via-emerald-700 hover:to-teal-700 transition-all duration-300"
            aria-label="Search for GitHub profiles"
          >
            🚀 Search Profiles
          </button>
        </form>

        {/* --- RESULTS SECTION --- */}
        
        {/* Show Loading Text if loading is true */}
        {loading && (
          <div className="text-center mt-12" role="status" aria-live="polite">
            <div 
              className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-green-200 border-t-green-600 mb-4"
              aria-hidden="true"
            ></div>
            <p className="text-2xl font-semibold text-green-700 animate-pulse">
              Searching GitHub...
            </p>
          </div>
        )}

        {/* Show Error Box if error is true */}
        {error && (
          <div 
            className="bg-red-50 border-l-4 border-red-500 text-red-700 p-6 rounded-xl mt-10 shadow-lg"
            role="alert"
            aria-live="assertive"
          >
            <p className="font-semibold">⚠️ Something went wrong. Please check your internet or try again.</p>
          </div>
        )}
        
        {/* Results Count */}
        {userData && userData.length > 0 && (
          <div className="text-center mt-12 mb-6" role="status" aria-live="polite">
            <p className="text-2xl font-bold text-green-700">
              Found {userData.length} developer{userData.length !== 1 ? 's' : ''} 🎉
            </p>
          </div>
        )}
        
        {/* THE GRID OF CARDS */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8"
          role="list"
          aria-label="Search results"
        >
          
          {/* We map over the list of users to create a card for each one */}
          {userData && userData.map((user) => (
            
            <div 
              key={user.id} 
              className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 border-2 border-green-100 hover:border-green-300"
              role="listitem"
            >
              
              {/* Avatar with gradient ring */}
              <div className="relative pt-6 pb-4 bg-gradient-to-br from-green-100 to-emerald-100">
                <div className="w-28 h-28 mx-auto rounded-full p-1 bg-gradient-to-r from-green-500 to-emerald-500">
                  <img 
                    src={user.avatar_url} 
                    alt={`${user.login}'s GitHub profile picture`}
                    className="w-full h-full rounded-full border-4 border-white shadow-lg" 
                  />
                </div>
              </div>
              
              {/* User info section */}
              <div className="p-6 text-center">
                <h2 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-green-700 transition-colors">
                  {user.login}
                </h2>
                
                {/* Profile link button */}
                <a 
                  href={user.html_url} 
                  target="_blank" 
                  rel="noreferrer noopener" 
                  className="inline-block mt-3 px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
                  aria-label={`View ${user.login}'s GitHub profile`}
                >
                  View Profile →
                </a>
              </div>
            
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Search;