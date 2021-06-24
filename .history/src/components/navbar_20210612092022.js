import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick= {closeMobileMenu}>
                        <img src="/logo-white.png" alt="" />
                    </Link>
                </div>
                <div className="menu-icon" onClick= {handleClick}>
                    <i className= { click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <Menu>
                    <a id="home" className="menu-item" href="/home">Home</a>
                    <a id="projects" className="menu-item" href="/projects">Projects</a>
                    <a id="software-design" className="menu-item" href="/software-design">Software Design</a>
                    <a id="services" className="menu-item" href="/services">Services</a>
                    <a id="home" className="menu-item" href="/about">About</a>
                    <a id="contact" className="menu-item" href="/contact">Contact</a>
                </Menu>
            </nav>
    )
}

export default Navbar