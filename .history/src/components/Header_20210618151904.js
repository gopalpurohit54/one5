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
                <li activeClassName="nav-item-active"><Link exact to="/" className="nav-items">Home</Link></li>
                <li><Link exact to="/Projects" className="nav-items">Projects</Link></li>
                <li><Link exact to="/SoftwareDesign" className="nav-items">Software Design</Link></li>
                <li><Link exact to="/Services" className="nav-items">Services</Link></li>
                <li><Link exact to="/About" className="nav-items">About</Link></li>
                <li><Link exact to="/Contact" className="nav-items">Contact</Link></li>
            </ul>
        </div>
    )
}

export default Header
