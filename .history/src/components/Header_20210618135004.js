import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <div className="logo">
                <img src="./logo-white.png" />
            </div>
            <ul className="nav-items">
                <li className="nav-items"><a href="Home.js">Home</a></li>
                <li className="nav-items"><a>Projects</a></li>
                <li className="nav-items"><a>Software Design</a></li>
                <li className="nav-items"><a>Services</a></li>
                <li className="nav-items"><a>About</a></li>
                <li className="nav-items"><a>Contact</a></li>
            </ul>
        </div>
    )
}

export default Header
