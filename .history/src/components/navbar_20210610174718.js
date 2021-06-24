import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function navbar() {
    const [click, setClick] = useState(false);
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
            </nav>
        </>
    )
}

export default navbar