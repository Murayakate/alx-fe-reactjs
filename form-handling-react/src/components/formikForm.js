import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/RegistrationForm.css';

const FormikForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Yup validation schema
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string().required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = (values) => {
    console.log('Form submitted:', values);
    alert(`Welcome ${values.username}!`);
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="registration-container">
      <h2>User Registration Form</h2>
      <Formik
        initialValues={{ username, email, password }}
        validationSchema={validationSchema}
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
