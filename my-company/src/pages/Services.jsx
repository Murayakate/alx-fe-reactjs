// Services.jsx
// This component will show all the services our company offers

function Services() {
  // We can create an array of services to make it easier to add or modify services
  const ourServices = [
    "Technology Consulting",
    "Market Analysis",
    "Product Development",
    "Digital Marketing",
    "Business Strategy"
  ];

  return (
    // Keep the consistent padding style
    <div style={{ padding: '20px' }}>
      {/* Main heading for our Services page */}
      <h1>Our Services</h1>

      {/* 
        We'll use an unordered list (ul) to show our services
        Each service will be a list item (li)
      */}
      <ul style={{ 
        // Add some style to make our list look better
        listStyle: 'none', // Remove default bullet points
        padding: 0 // Remove default padding
      }}>
        {/* 
          We use the map function to turn our array of services
          into an array of list items. This is a common React pattern!
        */}
        {ourServices.map((service, index) => (
          // Each list item needs a unique 'key' prop to help React keep track
          <li key={index} style={{ 
            margin: '10px 0',
            padding: '15px',
            backgroundColor: '#f5f5f5',
            borderRadius: '5px'
          }}>
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Export the component so we can use it in other files
export default Services;