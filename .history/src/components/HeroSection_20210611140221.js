import React, { useState, useEffect } from 'react';
import './App.css';
import { Button } from './Button';
import anim from '../src/assets/red-blob-hq.gif';
import styled from 'styled-components';
import { motion } from 'framer-motion';

function HeroSection() {
    
    const Section = styled.section `
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #1c1c1c;
    `;

    const Container = styled.div `
        display: grid;
        grid-template-columns: 1fr 1fr;
        height: 100vh;
        padding: 3rem calc((100vw - 1300px) /2 );

        @media screen and (max-width: 768px){
            grid-grid-template-columns: 1fr;
        }
    `;

    const ColumnLeft = style.div ``
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
        <Section>
            <Container>
                <ColumnLeft>
                    <p>WE ARE</p>
                    <h1>A FULL SERVICE <br/>
                    DIGITAL AGENCY</h1>
                    <p>Our creative team is focused on stunning and results driven <br/>
                    solutions for small to medium business all over the world.</p>
                    <div className='hero-btn'>
                    <Button className='btn' buttonStyle='btn--primary'>Get Quote</Button>
                    </div>
                </ColumnLeft>
                <ColumnRight>
                    <img src= { anim } style= {{ display: 'block', margin: 'auto' }} alt= "Loading..." />
                </ColumnRight>
            </Container>
        </Section>
    )
}

export default HeroSection
