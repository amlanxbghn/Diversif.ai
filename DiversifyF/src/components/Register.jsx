import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <h1 className="text-4xl font-bold">Registration Page will be available soon.</h1>
      <p className="text-xl">Meanwhile, you can enjoy all the features without Registering. :)</p>
      <Link to="/">
        <button className="px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 duration-200">Back to Home</button>
      </Link>
    </div>
  );
};

export default Register;
