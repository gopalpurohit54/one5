import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        <img src="/logo-black.png" alt="" />
                    </Link>
                </div>
                <div className="menu-icon">
                    <i className= { click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
            </nav>
        </>
    )
}

export default navbar