import { useState } from "react";
import styles from "./SearchBar.module.css";

function SearchBar({ onSearch }) {
  //accepting the onSearch prop from app.jsx
  const [username, setUsername] = useState("");
  // creating function to handle the form submit
  const handleSubmit = (e) => {
    e.preventDefault(); //stops page from refreshing
    onSearch(username);
  };
  return (
    // 1. The new Wrapper div (creates the white pill shape)
    <form onSubmit={handleSubmit} className={styles.wrapper}>
      <input
        type="text"
        placeholder="Search GitHub username..."
        className={styles.input}
        //this is updating the username from the " "to to wahat u wrote on the search bar
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button type="submit" className={styles.designBtn}>
        Search
      </button>
    </form>
  );
}

export default SearchBar;
