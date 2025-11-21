
import styles from './UserCard.module.css'; // Make sure this points to the file above

function UserCard() {
  return (
    <div className={styles.card}>
      
      {/* 1. The Purple Banner */}
      <div className={styles.banner}></div>

      {/* 2. The Avatar */}
      <img
        src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
        alt="User Avatar"
        className={styles.avatar}
      />

      {/* 3. Name and Bio */}
      <div className={styles.content}>
        <h2 className={styles.name}>GitHub User</h2>
        {/* 1. Make the username a link too! */}
        <a href="https://github.com" target="_blank" rel="noreferrer" className={styles.username}>
            @username
        </a>
        <p className={styles.bio}>
          Building things for the web. Learning React and loving it! 🚀
        </p>
          {/*The View Profile Button */}
        <a href="https://github.com" target="_blank" rel="noreferrer">
            <button className={styles.profileBtn}>View Profile</button>
        </a>
      </div>

      

      {/* 4. The Stats Grid */}
      <div className={styles.stats}>
        <div className={styles.statItem}>
          <span className={styles.statValue}>25</span>
          <span className={styles.statLabel}>Repos</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statValue}>1.2k</span>
          <span className={styles.statLabel}>Followers</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statValue}>300</span>
          <span className={styles.statLabel}>Following</span>
        </div>
      </div>

    </div>
  );
}

export default UserCard;