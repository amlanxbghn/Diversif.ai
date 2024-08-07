import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold">Cross Platform</h1>
      <h1 className="text-6xl font-bold mt-1">Content Diversification Tool.</h1>
      <p className="text-xl font-medium text-zinc-400 mt-5">Bridge Platforms Seamlessly - Empower your Presence Everywhere.</p>
      <p className="text-xl font-medium text-zinc-400">Powered by AI.</p>
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
