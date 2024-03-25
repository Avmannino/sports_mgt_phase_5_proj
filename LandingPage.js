import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import './LandingPage.css'; // Import the CSS file
import blackLogo from './assets/black_logo.png'; // Import your blackLogo image

function LandingPage() {
  return (
    <div className="landing-page">
      <img src={blackLogo} alt="Logo" className="logo" /> {/* Logo element */}
      <div className="content">
        <p>Manage Smarter, Play Harder</p>
        <Link to="/home" className="landing-button">Get Started</Link> {/* Link button to /home */}
      </div>
    </div>
  );
}

export default LandingPage;
