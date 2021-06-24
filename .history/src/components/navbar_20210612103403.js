import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    
    // const [click, setClick] = useState(false);

    // const handleClick = () => setClick(!click);

    return (
            <nav>
                <div className="navbar-logo">
                    <a href="/"><img src="/logo-white.png" alt="" /></a> 
                </div>
                <div className="menu-icon">
                    <i className=" fas fa-bars"></i>
                </div>
                <ul> 
                    <li><a id="home" className="menu-item" href="/home">Home</a></li>
                    <li><a id="projects" className="menu-item" href="/projects">Projects</a></li>
                    <li><a id="software-design" className="menu-item" href="/software-design">Software Design</a></li>
                    <li><a id="services" className="menu-item" href="/services">Services</a></li>
                    <li><a id="home" className="menu-item" href="/about">About</a></li>
                    <li><a id="contact" className="menu-item" href="/contact">Contact</a></li>
                </ul>
            </nav>
    )
}

export default Navbar