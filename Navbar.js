import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import navLogo from './assets/nav_logo.png';

function Navbar() {
    const location = useLocation();
    const [active, setActive] = useState("nav_menu");
    const [toggleIcon, setToggleIcon] = useState("nav_toggler");
    const [showLogo, setShowLogo] = useState(true);

    useEffect(() => {
        setShowLogo(location.pathname !== '/');
    }, [location]);

    const navToggle = () => {
        setActive(active === "nav_menu" ? 'nav_menu nav_active' : 'nav_menu');
        setToggleIcon(toggleIcon === 'nav_toggler' ? 'nav_toggler toggle' : 'nav_toggler');
    };

    return (
        <nav className={`nav ${active ? 'nav_active' : ''}`}>
            {showLogo && (
                <div className="nav_left">
                    <Link to="/" className="nav_logo_link">
                        <img src={navLogo} alt="nav_pic" className="nav_logo" />
                    </Link>
                </div>
            )}
            <ul className={active}>
                <div className="nav_item"><Link to="/home" className="home_link">Home</Link></div>
                <div className="nav_item"><Link to="/schedules" className="schedules_link">Schedules</Link></div>
                <div className="nav_item sports_dropdown">
                    <Link to="/sports" className="sports_link">Sports</Link>
                    <div className="dropdown_content">
                        <Link to="/football" className="dropdown_item">Football</Link>
                        <Link to="/basketball" className="dropdown_item">Basketball</Link>
                        <Link to="/tennis" className="dropdown_item">Tennis</Link>
                    </div>
                </div>
                <div className="nav_item"><Link to="/pricing" className="pricing_link">Pricing</Link></div>
                <div className="nav_item"><Link to="/settings" className="settings_link">Settings</Link></div>
            </ul>
            <div onClick={navToggle} className={toggleIcon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
}

export default Navbar;
