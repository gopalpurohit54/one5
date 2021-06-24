import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <div className="logo">
                <img src="./logo-white.png" />
            </div>
            <ul className="nav-items">
                <li className="nav-items"><Link to="/">Home</Link></li>
                <li className="nav-items"><Link to="/Projects">Projects</Link></li>
                <li className="nav-items"><Link to="/SoftwareDesign">Software Design</Link></li>
                <li className="nav-items"><Link to="/Services">Services</Link></li>
                <li className="nav-items"><Link to="/About">About</Link></li>
                <li className="nav-items"><Link to="/Contact">Contact</Link></li>
            </ul>
        </div>
    )
}

export default Header
