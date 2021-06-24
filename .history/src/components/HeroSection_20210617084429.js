import React, { useState, useEffect } from 'react';
import './App.css';
import { Button } from './Button';
import styled from 'styled-components';
import './HeroSection.css';

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
        <div className = 'hero-section'>
            <div className = 'hero-container'>
                <div className = 'col-left'>
                    <p className = 'hero-shortdesc' style={{ color: '#F04E31' }}>───── WE ARE</p>
                    <h1>A FULL SERVICE <br/>
                    DIGITAL AGENCY</h1>
                    <p className = 'hero-desc'>Our creative team is focused on stunning and results driven <br/>
                    solutions for small to medium business all over the world.</p>
                    <div className='hero-btn'>
                    <Button className='btn' buttonStyle='btn--primary'>GET A QUOTE</Button>
                    </div>
                </div>
                <div className = 'col-right'>
                    <img src= "./blob.gif" alt= "Loading..." />
                </div>
            </div>
        </div>
    )
}

export default HeroSection
