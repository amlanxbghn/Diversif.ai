import React from 'react';
import Convert from '../Convert/Convert'; 
import './ConvertPage.css';
import { Link } from 'react-router-dom';

const ConvertPage = () => {
  return (
    <div className="convert-page">
      <div className="convert-wrapper">
        <Convert />
        <Link to="/">
          <button>Back to Home</button>
        </Link>
      </div>
    </div>
  );
}

export default ConvertPage;
