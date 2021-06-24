import React, { useState, useEffect } from 'react';
import './App.css';
import { Button } from './Button';
import styled from 'styled-components';
import './HeroSection.css';

function HeroSection() {

    const Container = styled.div `

    `;

    const ColumnLeft = styled.div `

    `;
    
    const img = styled.img `
        
    `;

    const ColumnRight = styled.div ``

    // eslint-disable-next-line no-unused-vars
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
        
            <Container className = 'hero-container'>
                <ColumnLeft className = 'col-left'>
                    <p className = 'hero-shortdesc' style={{ color: '#F04E31' }}>───── WE ARE</p>
                    <h1>A FULL SERVICE <br/>
                    DIGITAL AGENCY</h1>
                    <p className = 'hero-desc'>Our creative team is focused on stunning and results driven <br/>
                    solutions for small to medium business all over the world.</p>
                    <div className='hero-btn'>
                    <Button className='btn' buttonStyle='btn--primary'>GET A QUOTE</Button>
                    </div>
                </ColumnLeft>
                <ColumnRight className = 'col-right'>
                    <img src= "./blob.gif" alt= "Loading..." />
                </ColumnRight>
            </Container>
    )
}

export default HeroSection
