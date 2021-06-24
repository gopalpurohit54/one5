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
    )
}

export default Navbar