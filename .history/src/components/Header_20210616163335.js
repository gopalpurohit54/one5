import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <div className="logo">
                <img src="./logo-white.png" />
            </div>
            <ul className="nav-items">
                <li>Home</li>
                <li>Projects</li>
                <li>Software Design</li>
                <li>Services</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Header
