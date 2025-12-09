import { Navigate } from 'react-router-dom'
import '../styles/ProtectedRoute.css'

function ProtectedRoute({ isAuthenticated, element }) {
  if (!isAuthenticated) {
    return (
      <div className="protected-route-message">
        <h2>Access Denied</h2>
        <p>You must be logged in to access this page.</p>
        <p>Please login to view your profile.</p>
      </div>
    )
  }

  return element
}

export default ProtectedRoute
