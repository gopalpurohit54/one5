import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <div className="logo">
                <img src="./logo-white.png" />
            </div>
            <ul className="nav-items">
                <li><Link to="/" className="nav-items">Home</Link></li>
                <li><Link to="/Projects" className="nav-items">Projects</Link></li>
                <li><Link to="/SoftwareDesign" className="nav-items">Software Design</Link></li>
                <li><Link to="/Services" className="nav-items">Services</Link></li>
                <li><Link to="/About" className="nav-items">About</Link></li>
                <li><Link to="/Contact" className="nav-items">Contact</Link></li>
            </ul>
        </div>
    )
}

export default Header
