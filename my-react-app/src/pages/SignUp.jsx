import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './SignUp.css';

const SignUp = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().min(2, 'Too short').required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Minimum 6 characters').required('Password is required'),
  });

  const handleSubmit = (values) => {
    console.log('Sign up with:', values);
    // Add signup logic here
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-container">
        <h2>Sign Up</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <Field name="name" type="text" placeholder="Name" />
            <ErrorMessage name="name" component="div" className="error" />

            <Field name="email" type="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" className="error" />

            <Field name="password" type="password" placeholder="Password" />
            <ErrorMessage name="password" component="div" className="error" />

            <button type="submit">Sign Up</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;
