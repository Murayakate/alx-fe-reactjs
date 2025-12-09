import '../styles/ProfileDetails.css'

function ProfileDetails() {
  return (
    <div className="profile-details">
      <h2>Profile Details</h2>
      <div className="details-card">
        <div className="detail-item">
          <span className="label">Name:</span>
          <span className="value">John Doe</span>
        </div>
        <div className="detail-item">
          <span className="label">Email:</span>
          <span className="value">john.doe@example.com</span>
        </div>
        <div className="detail-item">
          <span className="label">Location:</span>
          <span className="value">New York, USA</span>
        </div>
        <div className="detail-item">
          <span className="label">Member Since:</span>
          <span className="value">January 2024</span>
        </div>
        <div className="detail-item">
          <span className="label">Status:</span>
          <span className="value active">Active</span>
        </div>
      </div>
      <p className="nested-route-info">This is a nested route: /profile/details</p>
    </div>
  )
}

export default ProfileDetails
