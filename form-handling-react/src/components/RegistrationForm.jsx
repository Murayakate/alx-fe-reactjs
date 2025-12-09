import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import '../styles/RegistrationForm.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  // Basic validation logic
  const validateForm = (values) => {
    const newErrors = {};
    
    if (!values.username) {
      newErrors.username = 'Username is required';
    } else if (values.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }
    
    if (!values.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!values.password) {
      newErrors.password = 'Password is required';
    } else if (values.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    return newErrors;
  };

  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values) => {
    const newErrors = validateForm(values);
    
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted with values:', values);
      alert(`Welcome ${values.username}! Your account has been created.`);
      setFormData(initialValues);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="registration-container">
      <h2>User Registration Form</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validate={validateForm}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit} className="registration-form">
            {/* Username Field */}
            <div className="form-group">
              <label htmlFor="username">Username *</label>
              <Field
                type="text"
                id="username"
                name="username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your username"
                className="form-input"
              />
              {errors.username && touched.username && (
                <div className="error-message">{errors.username}</div>
              )}
            </div>

            {/* Email Field */}
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <Field
                type="email"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your email"
                className="form-input"
              />
              {errors.email && touched.email && (
                <div className="error-message">{errors.email}</div>
              )}
            </div>

            {/* Password Field */}
            <div className="form-group">
              <label htmlFor="password">Password *</label>
              <Field
                type="password"
                id="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your password"
                className="form-input"
              />
              {errors.password && touched.password && (
                <div className="error-message">{errors.password}</div>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="submit-button"
            >
              {isSubmitting ? 'Registering...' : 'Register'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
