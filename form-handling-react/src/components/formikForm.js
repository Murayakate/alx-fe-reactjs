import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import '../styles/RegistrationForm.css';

const FormikForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  // Validation schema
  const validationSchema = yup.object().shape({
    username: yup.string().required('Username is required'),
    email: yup.string().required('Email is required'),
    password: yup.string().required('Password is required'),
  });

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
    const newErrors = validateForm(values);
    
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', values);
      alert(`Welcome ${username}!`);
      setUsername('');
      setEmail('');
      setPassword('');
      setErrors({});
    }
  };

  return (
    <div className="registration-container">
      <h2>User Registration Form</h2>
      <Formik
        initialValues={{ username, email, password }}
        validationSchema={validationSchema}
        validate={validateForm}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, handleSubmit, handleChange }) => (
          <Form onSubmit={handleSubmit} className="registration-form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <Field type="text" id="username" name="username" value={username} onChange={(e) => { setUsername(e.target.value); handleChange(e); }} placeholder="Enter username" className="form-input" />
              <ErrorMessage name="username" component="span" className="error-message" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" value={email} onChange={(e) => { setEmail(e.target.value); handleChange(e); }} placeholder="Enter email" className="form-input" />
              <ErrorMessage name="email" component="span" className="error-message" />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field type="password" id="password" name="password" value={password} onChange={(e) => { setPassword(e.target.value); handleChange(e); }} placeholder="Enter password" className="form-input" />
              <ErrorMessage name="password" component="span" className="error-message" />
            </div>

            <button type="submit" className="submit-button">Register</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
