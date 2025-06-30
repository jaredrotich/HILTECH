import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './SignIn.css';

const SignIn = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Minimum 6 characters').required('Password is required'),
  });

  const handleSubmit = (values) => {
    console.log('Logging in with:', values);
    // Add real login logic here
  };

  return (
    <div className="signin-wrapper">
      <div className="signin-container">
        <h2>Sign In</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <Field name="email" type="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" className="error" />

            <Field name="password" type="password" placeholder="Password" />
            <ErrorMessage name="password" component="div" className="error" />

            <button type="submit">Sign In</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default SignIn;

