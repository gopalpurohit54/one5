import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <div className="logo">
                <img src="./logo-white.png" />
            </div>
            <ul className="nav-items">
                <li activeClassName="nav-item-active"><NavLink exact to="/" className="nav-items">Home</NavLink></li>
                <li><NavLink exact to="/Projects" className="nav-items">Projects</NavLink></li>
                <li><NavLink exact to="/SoftwareDesign" className="nav-items">Software Design</NavLink></li>
                <li><NavLink exact to="/Services" className="nav-items">Services</NavLink></li>
                <li><NavLink exact to="/About" className="nav-items">About</NavLink></li>
                <li><NavLink exact to="/Contact" className="nav-items">Contact</NavLink></li>
            </ul>
        </div>
    )
}

export default Header
