import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold">Cross Platform</h1>
      <h1 className="text-6xl font-bold mt-1">Content Diversification Tool.</h1>
      <p className="text-xl font-medium text-zinc-400 mt-4">Bridge Platforms Seamlessly - Empower your Presence Everywhere.</p>
      <p className="text-xl font-medium text-zinc-400">Powered by AI.</p>
      <Link to="/page-one">
        <button className="convertbtn px-10 bg-blue-600 rounded-lg mt-5 text-xl font-medium hover:bg-blue-800 duration-200">
          Convert &nbsp; ➞
        </button>
      </Link>
      <Link to="/page-two">
        <button className="aboutbtn px-10 py-12 border border-zinc-600 text-white rounded-2xl mt-16 text-left flex hover:bg-zinc-900 duration-200">
            <div className='aboutbtn-child-div'>
                <p className="aboutbtn-child font-medium">About Diversify</p>
                <p className="aboutbtn-child text-sm font-normal text-zinc-400">Read more about what we do</p>
            </div>
            <div className="aboutbtn-child ml-12 py-2 text-zinc-400">
                ►
            </div>
        </button>
      </Link>
    </div>
  );
}

export default Home;
