import React, { useState, useEffect } from 'react';
import { Button } from './Button';

function HeroSection() {
    
    const [button, setButton] = useState(true);
        
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };
    
    useEffect ( ( ) => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <div className= 'hero-container'>
            <div className= 'left-content'>
                <p>WE ARE</p>
                <h1>A FULL SERVICE <br/>
                DIGITAL AGENCY</h1>
                <p>Our creative team is focused on stunning and results driven <br/>
                solutions for small to medium business all over the world.</p>
                <div className='hero-btn'>
                <Button className='btn' buttonStyle='btn--primary'>Get Quote</Button>
                </div>
            </div>
            <div className= 'right-content'>
                <video src='../Assests/red-blob-hq.gif' />
            </div>
        </div>
    )
}

export default HeroSection
