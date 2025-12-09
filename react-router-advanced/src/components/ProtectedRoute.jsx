import { Navigate } from 'react-router-dom'
import '../styles/ProtectedRoute.css'

// Custom hook for authentication
function useAuth() {
  return {
    isAuthenticated: localStorage.getItem('isAuthenticated') === 'true'
  }
}

function ProtectedRoute({ isAuthenticated, element }) {
  const { isAuthenticated: authStatus } = useAuth()
  const finalAuth = isAuthenticated !== undefined ? isAuthenticated : authStatus

  if (!finalAuth) {
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
