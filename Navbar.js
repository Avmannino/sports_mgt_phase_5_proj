import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import syncLogo from './assets/sync_logo.png';



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
        <nav className="nav">
            {showLogo && (
                <div className="nav_left">
                    <Link to="/" className="nav_logo_link">
                        <img src={syncLogo} alt="nav_pic" className="nav_logo" />
                    </Link>
                </div>
            )}
            <ul className={active}>
                <li className="nav_item"><Link to="/home" className="nav_link">Home</Link></li>
                <li className="nav_item"><Link to="/sports" className="nav_link">Sports</Link></li>
                <li className="nav_item"><Link to="/schedules" className="nav_link">Schedules</Link></li>
                <li className="nav_item"><Link to="/stats" className="nav_link">Stats</Link></li>
                <li className="nav_item"><Link to="/admin" className="nav_link">Admin Portal</Link></li>
                <li className="nav_item"><Link to="/settings" className="nav_link">Settings</Link></li>
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
