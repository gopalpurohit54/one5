import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
            <nav className="navbar">
                <div className="navbar-logo">
                    <a href="/"><img src="/logo-white.png" alt="" /></a> 
                </div>
                <div className="menu-icon" onClick= {handleClick}>
                    <i className= { click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className= { click ? 'nav-menu active' : 'nav-menu'}> 
                    <li><a id="home" className="menu-item" href="/home">Home</a></li>
                    <li><a id="projects" className="menu-item" href="/projects">Projects</a></li>
                    <li><a id="software-design" className="menu-item" href="/software-design">Software Design</a></li>
                    <li><a id="services" className="menu-item" href="/services">Services</a></li>
                    <li><a id="home" className="menu-item" href="/about">About</a></li>
                    <li><a id="contact" className="menu-item" href="/contact">Contact</a></li>
                    {/* <li className= 'nav-item'>
                        <Link to= '/home' className='nav-links' onClick= {handleClick}>
                            Home
                        </Link>
                    </li>
                    <li className= 'nav-item'>
                        <Link to= '/projects' className='nav-links' onClick= {handleClick}>
                            Projects
                        </Link>
                    </li>
                    <li className= 'nav-item'>
                        <Link to= '/software-design' className='nav-links' onClick= {handleClick}>
                            Software Design
                        </Link>
                    </li>
                    <li className= 'nav-item'>
                        <Link to= '/services' className='nav-links' onClick= {handleClick}>
                            Services
                        </Link>
                    </li>
                    <li className= 'nav-item'>
                        <Link to= '/about' className='nav-links' onClick= {handleClick}>
                            About
                        </Link>
                    </li>
                    <li className= 'nav-item'>
                        <Link to= '/contact' className='nav-links' onClick= {handleClick}>
                            Contact
                        </Link>
                    </li> */}
                </ul>
            </nav>
    )
}

export default Navbar