import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <h1 className="text-4xl font-bold">Register Page</h1>
      <p className="text-xl">This is the registration page.</p>
      <Link to="/">
        <button className="px-4 py-2 bg-red-500 text-white rounded">Back to Home</button>
      </Link>
    </div>
  );
};

export default Register;
