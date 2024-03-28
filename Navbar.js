import React from 'react';
import { Link } from 'react-router-dom'; // Using Link from react-router-dom for navigation
import './Navbar.css'; // Ensure the CSS file is correctly linked

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* <Link to="/home" className="nav-logo">SportsManager</Link> */}
      <div className="nav-items">
        <Link to="/home" className="nav-link">Home</Link>
        <Link to="/schedules" className="nav-link">Schedules</Link>
        <Link to="/pricing" className="nav-link">Pricing</Link>
        <Link to="/settings" className="nav-link">Settings</Link>
      </div>
    </nav>
  );
};

export default Navbar;
