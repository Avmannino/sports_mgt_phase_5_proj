// LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './LandingPage.css'; // Import the CSS file
import blackLogo from './assets/black_logo.png'; // Import your blackLogo image
import Navbar from './Navbar';
import tsLogo from './assets/ts_logo.png';


function LandingPage({ onButtonClick }) {
  const handleButtonClick = () => {
    onButtonClick(); // Notify the parent component
  };

  return (
    <div className="landing-page">
      <img src={blackLogo} alt="Logo" className="logo" /> 
      <img src={tsLogo} about="Ts-Logo" className="ts-logo" />
      <div className="content">
        <p>Manage Smarter, Play Harder</p>
        {/* Link button to trigger redirection */}
        <Link to="/home" className="landing-button" onClick={handleButtonClick}>Get Started</Link>
      </div>
    </div>
  );
}

export default LandingPage;
