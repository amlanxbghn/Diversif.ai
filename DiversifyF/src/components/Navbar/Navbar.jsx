import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  const showRegisterButton = location.pathname === '/';

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        diversify.ai
      </Link>
      {showRegisterButton && (
        <Link to="/register">
          <button className="register-button">Register</button>
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
