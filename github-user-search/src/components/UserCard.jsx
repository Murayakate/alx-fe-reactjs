
import styles from './UserCard.module.css';

function UserCard({user}) {
  if (!user) {
    return null;
  }
  return (
    <div className={styles.card}>
      
      {/* 1. The Purple Banner */}
      <div className={styles.banner}></div>

      {/* 2. The Avatar */}
      <img
        src={user.avatar_url}
        alt="User Avatar"
        className={styles.avatar}
      />

      {/* 3. Name and Bio */}
      <div className={styles.content}>
        <h2 className={styles.name}>{user.name || user.login}</h2>
        {/* 1. Make the username a link too! */}
        <a href={user.html_url}
         target="_blank"
         
         rel="noreferrer" 
         className={styles.username}>
            {user.login}
        </a>
        <p className={styles.bio}>
         {user.bio || 'this user has no bio' }
         
        </p>
        <a href={user.html_url} 
        target="_blank"
         rel="noreferrer">
            <button className={styles.profileBtn}>View Profile</button>
        </a>
      </div>

      

      {/* 4. The Stats Grid */}
      <div className={styles.stats}>
        <div className={styles.statItem}>
          <span className={styles.statValue}>{user.public_repos}</span>
          <span className={styles.statLabel}>Repos</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statValue}>{user.followers} </span>
          <span className={styles.statLabel}>Followers</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statValue}>{user.following}</span>
          <span className={styles.statLabel}>Following</span>
        </div>
      </div>

    </div>
  );
}

export default UserCard;