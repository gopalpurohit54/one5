import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <div className="logo">
                <img src="./logo-white.png" />
            </div>
            <ul className="nav-items">
                <li><a>Home</a></li>
                <li><a>Projects</a></li>
                <li><a>Software Design</a></li>
                <li><a>Services</a></li>
                <li><a>About</a></li>
                <li><a>Contact</a></li>
            </ul>
        </div>
    )
}

export default Header
