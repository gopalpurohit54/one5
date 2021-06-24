import React, { useState, useEffect } from 'react';
import './App.css';
import { Button } from './Button';
// import anim from '../src/assets/red-blob-hq.gif';
import styled from 'styled-components';
import { motion } from 'framer-motion';

function HeroSection() {
    
    const Section = styled.section `
        height: 75vh;
        display: flex;
        flex-direction: column;
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

    const ColumnLeft = styled.div `
        display: flex;
        color: #fff;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 5rem 2rem;

        h1 {
            margin-bottom: 2rem;
            font-size: 4rem;
            line-height: 1.2;
        }

        p {
            margin-bottom: 1.5rem;
            font-size: 1rem;
            line-height: 1.5;
            font-style: normal;
            font-weight: 300;
        }

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
        <Section className = 'hero-section'>
            <Container className = 'hero-container'>
                <ColumnLeft className = 'col-left'>
                    <p className = 'hero-shortdesc' style={{ color: '#F04E31' }}>────────WE ARE</p>
                    <h1>A FULL SERVICE <br/>
                    DIGITAL AGENCY</h1>
                    <p className = 'hero-desc'>Our creative team is focused on stunning and results driven <br/>
                    solutions for small to medium business all over the world.</p>
                    <div className='hero-btn'>
                    <Button className='btn' buttonStyle='btn--primary'>GET A QUOTE</Button>
                    </div>
                </ColumnLeft>
                {/* <ColumnRight className = 'col-right'>
                    <img src= { anim } style= {{ display: 'block', margin: 'auto' }} alt= "Loading..." />
                </ColumnRight> */}
            </Container>
        </Section>
    )
}

export default HeroSection
