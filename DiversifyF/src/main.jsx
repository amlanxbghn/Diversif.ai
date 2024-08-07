import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppWrapper from './App'; // Updated import

ReactDOM.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>,
  document.getElementById('root')
);
