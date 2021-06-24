import React from 'react';
import styled from 'styled-components';

function OurServices() {
    const Section = styled.section `
        height: 120vh;
        display: flex;
        flex-direction: column;
        justify-content: left;
        align-items: center;
        background-image: url('./bg-white-mainpage.png');
        background-repeat: no-repeat;
        grid-template-columns: 1.5fr 0.5fr;
        padding: 5rem 2rem;

        h1 {
            margin-bottom: 2rem;
            font-size: 3rem;
            line-height: 1.2;
            color: #000';
        }

        p {
            margin-bottom: 1.5rem;
            font-size: 1rem;
            line-height: 1.5;
            font-style: normal;
            font-weight: 300;
            color: #000;
        }
    `;
    const ColumnLeft = styled.div `
        display: flex;
        color: #fff;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    `;

    const ColumnRight = styled.div ``

    const Container = styled.section `
        display: grid;
        grid-template-columns: 1.5fr 0.5fr;
        height: 100vh;
        padding: 7rem calc((100vw - 1270px) /2 );

        @media screen and (max-width: 768px){
            grid-template-columns: 1fr;
        }
    `;


    return (
        <Section className= "our-services">
            <Container className= "services-container">
                <ColumnLeft className = 'col-left'>
                    <p className = 'service-shortdesc' style={{ color: '#F04E31' }}>───── OUR SERVICES</p>
                    <h1>DESIGN CREATIVE<br/> 
                    THAT GENERATE <span style={{color: '#F04E31'}} >RESULTS </span></h1>
                    <p className="service-desc">We offer highly innovative design for the web and mobile. Right from user 
                    interfaces to complete <br/> campaigns, our approach to design stems from a vision 
                    for the perfect marriage of aesthetics and functionality.</p>
                </ColumnLeft>
                <ColumnRight className = 'col-right'>
                    
                </ColumnRight>
            </Container>
        </Section>
    )
}

export default OurServices;