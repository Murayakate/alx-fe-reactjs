// Contact.jsx
// This component includes a form that uses React's useState hook to manage form data

// First, we need to import useState from React to manage our form state
import { useState } from 'react';

function Contact() {
  // useState lets us create state variables in our component
  // formData will hold all our form fields, and setFormData lets us update them
  const [formData, setFormData] = useState({
    name: '', // Start with empty name
    email: '', // Start with empty email
    message: '' // Start with empty message
  });

  // This function runs whenever someone types in any form field
  const handleChange = (e) => {
    // e.target gives us information about the input that changed
    // e.target.name tells us which input it was (name, email, or message)
    // e.target.value tells us what the new value is
    setFormData({
      ...formData, // Keep all the old form data
      [e.target.name]: e.target.value // Update just the field that changed
    });
  };

  // This function runs when the form is submitted
  const handleSubmit = (e) => {
    // Prevent the form from actually submitting to a server
    e.preventDefault();
    
    // Show what was submitted (in a real app, you'd send this to a server)
    alert('Form submitted with the following data:\n' + 
          `Name: ${formData.name}\n` +
          `Email: ${formData.email}\n` +
          `Message: ${formData.message}`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Contact Us</h1>
      
      {/* The form element with our submit handler */}
      <form onSubmit={handleSubmit}>
        {/* Input for name */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={{ 
            display: 'block', 
            margin: '10px 0',
            padding: '8px',
            width: '100%',
            maxWidth: '300px'
          }}
        />

        {/* Input for email */}
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={{ 
            display: 'block', 
            margin: '10px 0',
            padding: '8px',
            width: '100%',
            maxWidth: '300px'
          }}
        />

        {/* Textarea for message */}
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{ 
            display: 'block', 
            margin: '10px 0',
            padding: '8px',
            width: '100%',
            maxWidth: '300px',
            height: '100px'
          }}
        />

        {/* Submit button */}
        <button 
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

// Export the component
export default Contact;