/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
    const [navbar, setHeader] = useState(false);

    const changeBackground = () => {
        console.log(window.scrollY)
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <div className="header active">
            <div className="logo">
                <img src="./logo-white.png" alt="logo" />
            </div>
                <ul className="nav-item">
                    <li className="nav-items"><NavLink exact to="/" className="nav-items" activeClassName="nav-item-active">Home</NavLink></li>
                    <li className="nav-items"><NavLink exact to="/Projects" className="nav-items" activeClassName="nav-item-active">Projects</NavLink></li>
                    <li className="nav-items"><NavLink exact to="/SoftwareDesign" className="nav-items" activeClassName="nav-item-active">Software Design</NavLink></li>
                    <li className="nav-items"><NavLink exact to="/Services" className="nav-items" activeClassName="nav-item-active">Services</NavLink></li>
                    <li className="nav-items"><NavLink exact to="/About" className="nav-items" activeClassName="nav-item-active">About</NavLink></li>
                    <li className="nav-items"><NavLink exact to="/Contact" className="nav-items" activeClassName="nav-item-active">Contact</NavLink></li>
                </ul>
        </div>
    )
}

export default Header
