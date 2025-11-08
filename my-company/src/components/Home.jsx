// Home.jsx
// This is our Home page component. In React, we create components as functions
// that return JSX (which looks like HTML but can include JavaScript)

function Home() {
  // The return statement contains what we want to show on the page
  // We wrap everything in a div with some padding to make it look nice
  return (
    // style={{ }} lets us write CSS directly in our JSX
    // The outer {{ }} means we're writing JavaScript, the inner {} is an object
    <div style={{ padding: '20px' }}>
      {/* This is our main heading for the home page */}
      <h1>Welcome to Our Company</h1>
      
      {/* This is a paragraph with our welcome message */}
      <p>We are dedicated to delivering excellence in all our services.</p>
      
      {/* You can add more content here as needed */}
      <p>Discover how we can help your business grow!</p>
    </div>
  );
}

// We need to export our component so other files can use it
export default Home;