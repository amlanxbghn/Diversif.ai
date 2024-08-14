import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token
    localStorage.removeItem('user'); // Optionally remove user info
    navigate('/'); // Redirect to home page
  };

  const isLoggedIn = !!localStorage.getItem('token'); // Check if the user is logged in

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        diversify.ai
      </Link>
      <div className="navbar-links">
        {isLoggedIn ? (
          <button onClick={handleLogout} className="logout-button">Logout</button>
        ) : (
          <>
            <Link to="/register">
              <button className="register-button">Register</button>
            </Link>
            <Link to="/login">
              <button className="login-button">Login</button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
