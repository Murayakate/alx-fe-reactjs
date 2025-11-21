
import styles from './SearchBar.module.css';

function SearchBar() {
  return (
    // 1. The new Wrapper div (creates the white pill shape)
    <div className={styles.wrapper}>
      
      <input 
        type="text" 
        placeholder="Search GitHub username..." 
        className={styles.input} 
      />
      
      <button className={styles.designBtn}>
        Search
      </button>
      
    </div>
  );
}

export default SearchBar;