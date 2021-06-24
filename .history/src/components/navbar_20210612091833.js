import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <Link to="/" className="navbar-logo" onClick="">
            <img src="/logo-white.png" alt="" />
        </Link>
        
        <div className="menu-icon" onClick= {handleClick}>
            <i className= { click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <Menu>
            <a id="home" className="menu-item" href="/home">Home</a>
            <a id="projects" className="menu-item" href="/projects">Projects</a>
            <a id="software-design" className="menu-item" href="/software-design">Software Design</a>
            <a id="services" className="menu-item" href="/services">Services</a>
            <a id="about" className="menu-item" href="/about">About</a>
            <a id="contact" className="menu-item" href="/contact">Contact</a>
        </Menu>
    )
}

export default Navbar