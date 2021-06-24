import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick= {handleClick}>
                        <img src="/logo-white.png" alt="" />
                    </Link>
                </div>
                <div className="menu-icon" onClick= {handleClick}>
                    <i className= { click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className= { click ? 'nav-menu active' : 'nav-menu'}> 
                    <li className= 'nav-item'>
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
                    </li>
                </ul>
            </nav>
    )
}

export default Navbar