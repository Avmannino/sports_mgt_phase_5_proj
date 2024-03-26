// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import Home from './Home';
import Sports from './Sports';
import Schedules from './Schedules';
import Pricing from './Pricing';
import Settings from './Settings';
import './App.css';

function App() {
  const [navActive, setNavActive] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const handleButtonClick = () => {
    setButtonClicked(true);
  };

  return (
    <Router>
      <div className="app">
        {!buttonClicked ? (
          <LandingPage onButtonClick={handleButtonClick} />
        ) : (
          <>
            <Navbar active={navActive} toggleNav={toggleNav} />
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/sports" element={<Sports />} />
              <Route path="/schedules" element={<Schedules />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
