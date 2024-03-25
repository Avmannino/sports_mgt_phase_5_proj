import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import blackLogo from './assets/black_logo.png';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import Home from './Home';


function App() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const isRootPath = window.location.pathname === '/';

  return (
    <Router>
      <div className="app">
        {!isRootPath && <Navbar active={navActive} toggleNav={toggleNav} />}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/sports" element={<Sports />} />
          <Route path="/schedules" element={<Schedules />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/portal" element={<Portal />} />
          <Route path="/settings" element={<Settings />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
