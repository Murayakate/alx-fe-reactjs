import { useNavigate } from 'react-router-dom'
import '../styles/Login.css'

function Login({ setIsAuthenticated }) {
  const navigate = useNavigate()

  const handleLogin = () => {
    setIsAuthenticated(true)
    navigate('/profile')
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        <p className="login-subtitle">Authenticate to access protected routes</p>
        
        <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="user@example.com" 
              defaultValue="demo@example.com"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              placeholder="password" 
              defaultValue="demo123"
            />
          </div>
          
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
        
        <p className="demo-note">Demo: Use any credentials to login</p>
      </div>
    </div>
  )
}

export default Login
