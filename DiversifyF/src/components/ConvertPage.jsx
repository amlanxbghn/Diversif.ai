import React from 'react';
import Convert from './Convert';
import { Link } from 'react-router-dom';

const ConvertPage = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="flex flex-col items-center justify-center space-y-4 mt-16 w-full">
        <Convert />
        <Link to="/">
          <button className="px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 duration-200">Back to Home</button>
        </Link>
      </div>
    </div>
  );
}

export default ConvertPage;
