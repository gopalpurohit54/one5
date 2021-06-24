import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <div className="logo">
                <img src="./logo-white.png" />
            </div>
            <ul className="nav-items">
                <li className="nav-items"><a className="nav-items" href="#">Home</a></li>
                <li className="nav-items"><a className="nav-items" href="#">Projects</a></li>
                <li className="nav-items"><a className="nav-items" href="#">Software Design</a></li>
                <li className="nav-items"><a className="nav-items" href="#">Services</a></li>
                <li className="nav-items"><a className="nav-items" href="#">About</a></li>
                <li className="nav-items"><a className="nav-items" href="#">Contact</a></li>
            </ul>
        </div>
    )
}

export default Header
