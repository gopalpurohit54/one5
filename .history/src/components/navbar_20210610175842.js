import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
                        <Link className='nav-links' onClick= {closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default navbar