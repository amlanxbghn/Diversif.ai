import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';  // Import the CSS file

const Register = () => {
  return (
    <div className="register-container">
      <h1 className="register-title">Registration Page will be available soon.</h1>
      <p className="register-text">Meanwhile, you can enjoy all the features without Registering. :)</p>
      <Link to="/">
        <button className="register-button">Back to Home</button>
      </Link>
    </div>
  );
};

export default Register;
