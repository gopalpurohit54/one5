import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <div className="logo">
                <img src="./logo-white.png" />
            </div>
            <div className="nav-items">
                <ul>Home</ul>
                <ul>Projects</ul>
                <ul>Software Design</ul>
                <ul>Services</ul>
                <ul>About</ul>
                <ul>Contact</ul>
            </div>
        </div>
    )
}

export default Header
