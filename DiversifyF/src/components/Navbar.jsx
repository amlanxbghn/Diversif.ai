import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  // Conditionally render the Register button based on the route
  const showRegisterButton = location.pathname === '/';

  return (
    <nav className="flex items-center justify-between p-5">
      <div className="text-3xl font-bold">diversify.ai</div>
      {showRegisterButton && (
        <Link to="/register">
          <button className="bg-zinc-800 text-white rounded-lg border border-zinc-600 hover:bg-zinc-700 duration-200 m-0 ">Register</button>
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
