import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import './OurService.css';

function OurServices() {
    const Section = styled.section `
        height: 120vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-image: url('./bg-white-mainpage.png');
        background-repeat: no-repeat;
    `;
    const Container = styled.section `
        
    `;

    return (
        <Section className= "our-services">
            <Container className= "services-container">
                <p className = 'service-shortdesc' style={{ color: '#F04E31' }}>───── OUR SERVICES</p>
                <h1>DESIGN CREATIVE <br/>
                    THAT GENERATE <h1 style={{ color: '#F04E31' }} >RESULTS</h1></h1>
                <p className="service-desc">We offer highly innovative design for the web and mobile. Right from user <br/>
                interfaces to complete campaigns, our approach to design stems from a vision <br/>
                for the perfect marriage of aesthetics and functionality.</p>
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
            </Container>
        </Section>
    )
}

export default OurServices;