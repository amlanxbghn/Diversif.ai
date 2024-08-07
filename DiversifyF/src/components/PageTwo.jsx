import React from 'react';
import { Link } from 'react-router-dom';

const PageTwo = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <h1 className="text-4xl font-bold">This is Page Two</h1>
      <Link to="/">
        <button className="px-4 py-2 bg-yellow-500 text-white rounded">Back to Home</button>
      </Link>
    </div>
  );
}

export default PageTwo;
