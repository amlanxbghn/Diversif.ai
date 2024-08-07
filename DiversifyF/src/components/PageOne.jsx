import React from 'react';
import Convert from './Convert';
import { Link } from 'react-router-dom';

const PageOne = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="absolute top-4 left-4 text-2xl font-bold">MyApp</div>
      <div className="flex flex-col items-center justify-center space-y-4 mt-16 w-full">
        <Convert />
        <Link to="/">
          <button className="px-4 py-2 bg-red-500 text-white rounded">Back to Home</button>
        </Link>
      </div>
    </div>
  );
}

export default PageOne;
