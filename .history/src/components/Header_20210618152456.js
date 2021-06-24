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
                <li><NavLink exact to="/" className="nav-items" activeClassName="nav-item-active">Home</NavLink></li>
                <li><NavLink exact to="/Projects" className="nav-items" activeClassName="nav-item-active">Projects</NavLink></li>
                <li><NavLink exact to="/SoftwareDesign" className="nav-items" activeClassName="nav-item-active">Software Design</NavLink></li>
                <li><NavLink exact to="/Services" className="nav-items" activeClassName="nav-item-active">Services</NavLink></li>
                <li><NavLink exact to="/About" className="nav-items" activeClassName="nav-item-active">About</NavLink></li>
                <li><NavLink exact to="/Contact" className="nav-items" activeClassName="nav-item-active">Contact</NavLink></li>
            </ul>
        </div>
    )
}

export default Header
