import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import '../styles/RegistrationForm.css';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  // Basic validation logic
  const validateForm = (values) => {
    const newErrors = {};
    
    if (!username) {
      newErrors.username = 'Username is required';
    }
    
    if (!email) {
      newErrors.email = 'Email is required';
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
    }
    
    setErrors(newErrors);
    return newErrors;
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
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <Field type="text" id="username" name="username" value={username} onChange={(e) => { setUsername(e.target.value); handleChange(e); }} placeholder="Enter username" className="form-input" />
              {errors.username && touched.username && <span className="error-message">{errors.username}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" value={email} onChange={(e) => { setEmail(e.target.value); handleChange(e); }} placeholder="Enter email" className="form-input" />
              {errors.email && touched.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field type="password" id="password" name="password" value={password} onChange={(e) => { setPassword(e.target.value); handleChange(e); }} placeholder="Enter password" className="form-input" />
              {errors.password && touched.password && <span className="error-message">{errors.password}</span>}
            </div>

            <button type="submit" className="submit-button">Register</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
