import React from 'react';
import './LDabout.css';
import { Link } from 'react-router-dom';
import { Button } from './Button';

function LDabout() {
    return (
        <div className="ldabout">
            <Link exact to="/ServicePage"><p>BACK TO SERVICES</p></Link>
           <div className="ld-desc">
                <h1>LOGO DESIGN</h1>
                <p>Logo design is the utmost important start for any business. It dictates everything <br/>
                from your message, business card, brochure, marketing materials, website, online<br/>
                marketing.</p><br/>
                <p>We craft meaningful brands through visual identity, print and digital experience for <br/>
                small to medium business all over the world.</p>
                <div className='hero-btn'>
                    <Button className='btn' buttonStyle='btn--primary'>GET A QUOTE</Button>
                </div>
           </div>
        </div>
    )
}

export default LDabout
