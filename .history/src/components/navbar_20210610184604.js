import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

function navbar() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        <img src="/logo-black.png" alt="" />
                    </Link>
                </div>
                <div className="menu-icon" onClick= {handleClick}>
                    <i className= { click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className= { click ? 'nav-menu active' : 'nav-menu'}> 
                    <li className= 'nav-item'>
                        <Link to= '/home' className='nav-links' onClick= {closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className= 'nav-item'>
                        <Link to= '/projects' className='nav-links' onClick= {closeMobileMenu}>
                            Projects
                        </Link>
                    </li>
                    <li className= 'nav-item'>
                        <Link to= '/software-design' className='nav-links' onClick= {closeMobileMenu}>
                            Software Design
                        </Link>
                    </li>
                    <li className= 'nav-item'>
                        <Link to= '/services' className='nav-links' onClick= {closeMobileMenu}>
                            Services
                        </Link>
                    </li>
                    <li className= 'nav-item'>
                        <Link to= '/about' className='nav-links' onClick= {closeMobileMenu}>
                            About
                        </Link>
                    </li>
                    <li className= 'nav-item'>
                        <Link to= '/contact' className='nav-links' onClick= {closeMobileMenu}>
                            Contact
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--primary'>Get Quote</Button>}
            </nav>
        </>
    )
}

export default navbar