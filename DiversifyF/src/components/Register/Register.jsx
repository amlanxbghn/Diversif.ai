import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './Register.css';

const Register = () => {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = 'http://localhost:5174/api/users'; // Ensure this URL is correct
      const { data: res } = await axios.post(url, data);
      localStorage.setItem('token', res.token); // Save the token
      localStorage.setItem('user', JSON.stringify(res.user)); // Save user info
      navigate('/'); // Redirect to home page
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message); // Display error message if registration fails
      }
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form">
        <h1 className="register-title">Register</h1>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={data.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={data.lastName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={data.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={data.password}
          onChange={handleChange}
          required
        />
        {error && <div className="error">{error}</div>}
        <button type="submit">Register</button>
      </form>
      <div className="login-redirect">
        <p>Already a user?</p>
        <Link to="/login">
          <button>Login Here</button>
        </Link>
      </div>
    </div>
  );
};

export default Register;
