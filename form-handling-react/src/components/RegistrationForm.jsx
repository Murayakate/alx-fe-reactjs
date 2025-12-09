import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import '../styles/RegistrationForm.css';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Basic validation logic
  const validateForm = (values) => {
    const errors = {};
    
    if (!values.username) {
      errors.username = 'Username is required';
    }
    
    if (!values.email) {
      errors.email = 'Email is required';
    }
    
    if (!values.password) {
      errors.password = 'Password is required';
    }
    
    return errors;
  };

  const handleSubmit = (values) => {
    const errors = validateForm(values);
    
    if (Object.keys(errors).length === 0) {
      console.log('Form submitted:', values);
      alert(`Welcome ${values.username}!`);
      setUsername('');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div className="registration-container">
      <h2>User Registration Form</h2>
      <Formik
        initialValues={{ username, email, password }}
        validate={validateForm}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, handleSubmit, handleChange }) => (
          <Form onSubmit={handleSubmit} className="registration-form">
            {/* Username Field */}
            <div className="form-group">
              <label htmlFor="username">Username *</label>
              <Field
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  handleChange(e);
                }}
                placeholder="Enter your username"
                className="form-input"
              />
              {errors.username && touched.username && (
                <span className="error-message">{errors.username}</span>
              )}
            </div>

            {/* Email Field */}
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <Field
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  handleChange(e);
                }}
                placeholder="Enter your email"
                className="form-input"
              />
              {errors.email && touched.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>

            {/* Password Field */}
            <div className="form-group">
              <label htmlFor="password">Password *</label>
              <Field
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  handleChange(e);
                }}
                placeholder="Enter your password"
                className="form-input"
              />
              {errors.password && touched.password && (
                <span className="error-message">{errors.password}</span>
              )}
            </div>

            {/* Submit Button */}
            <button type="submit" className="submit-button">
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
