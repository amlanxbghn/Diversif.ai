import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  // Conditionally render the Register button based on the route
  const showRegisterButton = location.pathname === '/';

  return (
    <nav className="flex items-center justify-between p-4 h-16">
      <div className="text-2xl font-bold">MyApp</div>
      {showRegisterButton && (
        <Link to="/register">
          <button className="px-4 py-2 bg-blue-500 text-white rounded">Register</button>
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
