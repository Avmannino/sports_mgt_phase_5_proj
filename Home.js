// Home.js
import React from 'react';
import SportTiles from './SportTiles'; // Make sure the import path matches the file name
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Other components or content you want on the homepage */}
      <SportTiles /> {/* This will render the sport tiles on the homepage */}
    </div>
  );
};

export default Home;
