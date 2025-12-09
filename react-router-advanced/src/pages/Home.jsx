import { Link } from 'react-router-dom'
import '../styles/Home.css'

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to React Router Advanced Demo</h1>
      <p>This application demonstrates advanced React Router features</p>
      
      <div className="features-grid">
        <div className="feature-card">
          <h3>📰 Blog Posts</h3>
          <p>Browse dynamic blog posts with parameterized routes</p>
          <Link to="/blog" className="feature-link">View Blog</Link>
        </div>
        
        <div className="feature-card">
          <h3>👤 User Profiles</h3>
          <p>Access protected routes with authentication</p>
          <Link to="/login" className="feature-link">Login First</Link>
        </div>
        
        <div className="feature-card">
          <h3>🔀 Nested Routes</h3>
          <p>Explore sub-sections within Profile component</p>
          <Link to="/profile" className="feature-link">Profile (Login Required)</Link>
        </div>
      </div>

      <div className="demo-info">
        <h2>Features Demonstrated:</h2>
        <ul>
          <li><strong>Dynamic Routes:</strong> /blog/:id - Click blog posts to see dynamic routing</li>
          <li><strong>Nested Routes:</strong> /profile/* with sub-routes for Details and Settings</li>
          <li><strong>Protected Routes:</strong> /profile requires authentication</li>
          <li><strong>Navigation:</strong> Seamless navigation using React Router</li>
        </ul>
      </div>
    </div>
  )
}

export default Home
