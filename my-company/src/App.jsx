// Import routing components from react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Import our page components
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

// Import CSS (if you want to keep using it)
import './App.css'

function App() {
  return (
    // BrowserRouter wraps our entire app to enable routing
    <BrowserRouter>
      {/* Navbar will appear on all pages */}
      <Navbar />
      
      {/* Routes component manages our different page routes */}
      <Routes>
        {/* Define each route with its path and corresponding component */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
