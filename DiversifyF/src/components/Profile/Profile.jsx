import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (!user) navigate('/login');
    else fetchUserHistory();
  }, [user]);

  const fetchUserHistory = async () => {
    try {
      const url = `http://localhost:5173/api/history/${user._id}`;
      const { data } = await axios.get(url);
      setHistory(data);
    } catch (error) {
      console.error('Error fetching history:', error);
    }
  };

  return (
    <div className="profile-container">
      <h1>{user.firstName}'s Profile</h1>
      <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <h2>Conversion History</h2>
      <ul>
        {history.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
