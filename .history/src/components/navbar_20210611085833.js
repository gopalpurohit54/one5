import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    
    const [click, setClick] = useState(false);
    
    // const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    // const showButton = () => {
    //     if(window.innerWidth <= 960) {
    //         setButton(false);
    //     } else {
    //         setButton(true);
    //     }
    // };

    // window.addEventListener('resize', showButton);

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
                </div>
                
                {/* {button && <Button buttonStyle='btn--primary'>Get Quote</Button>} */}
            </nav>
        </>
    )
}

export default Navbar