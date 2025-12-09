import { Routes, Route, Link } from 'react-router-dom'
import '../styles/Profile.css'
import ProfileDetails from '../components/ProfileDetails'
import ProfileSettings from '../components/ProfileSettings'

function Profile() {
  return (
    <div className="profile-container">
      <h1>User Profile</h1>
      <p className="profile-intro">Welcome! Navigate through your profile sections below.</p>
      
      <div className="profile-nav">
        <Link to="details" className="profile-link">📋 Profile Details</Link>
        <Link to="settings" className="profile-link">⚙️ Settings</Link>
      </div>

      <div className="profile-content">
        <Routes>
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
          <Route path="" element={<ProfileDetails />} />
        </Routes>
      </div>
    </div>
  )
}

export default Profile
