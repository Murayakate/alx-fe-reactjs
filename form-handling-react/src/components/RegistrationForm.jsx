import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import '../styles/RegistrationForm.css';

const RegistrationForm = () => {
  // Validation schema using Yup
  const validationSchema = yup.object().shape({
    firstName: yup.string()
      .required('First name is required')
      .min(2, 'First name must be at least 2 characters'),
    lastName: yup.string()
      .required('Last name is required')
      .min(2, 'Last name must be at least 2 characters'),
    email: yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
      .matches(/[0-9]/, 'Password must contain at least one number'),
    confirmPassword: yup.string()
      .required('Please confirm your password')
      .oneOf([yup.ref('password')], 'Passwords must match'),
    phone: yup.string()
      .matches(/^[0-9]{10,}$/, 'Phone number must be at least 10 digits'),
    terms: yup.boolean()
      .oneOf([true], 'You must accept the terms and conditions'),
  });

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    terms: false,
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // Simulate form submission
    console.log('Form submitted with values:', values);
    alert(`Welcome ${values.firstName} ${values.lastName}! Your account has been created.`);
    setSubmitting(false);
    // Reset form could be done here if needed
  };

  return (
    <div className="registration-container">
      <h2>User Registration Form</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, isValid, dirty }) => (
          <Form className="registration-form">
            {/* First Name Field */}
            <div className="form-group">
              <label htmlFor="firstName">First Name *</label>
              <Field
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter your first name"
                className="form-input"
              />
              <ErrorMessage name="firstName" component="div" className="error-message" />
            </div>

            {/* Last Name Field */}
            <div className="form-group">
              <label htmlFor="lastName">Last Name *</label>
              <Field
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter your last name"
                className="form-input"
              />
              <ErrorMessage name="lastName" component="div" className="error-message" />
            </div>

            {/* Email Field */}
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="form-input"
              />
              <ErrorMessage name="email" component="div" className="error-message" />
            </div>

            {/* Phone Field */}
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <Field
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number (10+ digits)"
                className="form-input"
              />
              <ErrorMessage name="phone" component="div" className="error-message" />
            </div>

            {/* Password Field */}
            <div className="form-group">
              <label htmlFor="password">Password *</label>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="form-input"
              />
              <ErrorMessage name="password" component="div" className="error-message" />
              <small className="password-hint">
                Must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number
              </small>
            </div>

            {/* Confirm Password Field */}
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password *</label>
              <Field
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your password"
                className="form-input"
              />
              <ErrorMessage name="confirmPassword" component="div" className="error-message" />
            </div>

            {/* Terms and Conditions */}
            <div className="form-group checkbox">
              <Field
                type="checkbox"
                id="terms"
                name="terms"
                className="form-checkbox"
              />
              <label htmlFor="terms" className="checkbox-label">
                I accept the terms and conditions *
              </label>
              <ErrorMessage name="terms" component="div" className="error-message" />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || !isValid || !dirty}
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
