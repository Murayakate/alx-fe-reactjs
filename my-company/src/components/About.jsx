// About.jsx
// This is our About page component where we'll share information about the company

function About() {
  // Just like the Home page, we return JSX that describes what we want to show
  return (
    // We keep the same padding style for consistency across pages
    <div style={{ padding: '20px' }}>
      {/* Main heading for the About page */}
      <h1>About Us</h1>
      
      {/* Here's where we tell visitors about our company */}
      <p>
        Our company has been providing top-notch services since 1990. 
        We specialize in various fields including technology, marketing, 
        and consultancy.
      </p>
      
      {/* We can add more sections to tell our story */}
      <div style={{ marginTop: '20px' }}>
        <h2>Our Mission</h2>
        <p>To deliver innovative solutions that help businesses thrive.</p>
      </div>
    </div>
  );
}

// Don't forget to export the component!
export default About;