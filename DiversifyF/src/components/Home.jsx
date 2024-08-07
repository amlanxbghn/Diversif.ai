import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
      <p className="text-xl">This is the home page paragraph.</p>
      <Link to="/page-one">
        <button className="px-4 py-2 bg-blue-500 text-white rounded">Go to Page One</button>
      </Link>
      <Link to="/page-two">
        <button className="px-4 py-2 bg-green-500 text-white rounded">Go to Page Two</button>
      </Link>
    </div>
  );
}

export default Home;
