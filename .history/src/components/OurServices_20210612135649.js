import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function OurServices() {
    const Section = styled.section `
        height: 120vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-image: url('./bg-white-mainpage.png');
        background-repeat: no-repeat;

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
    const ColumnLeft = styled.div ``

    const Container = styled.section `
    
    `;

    const img = styled.img ``

    const ColumnRight = styled.div ``

    return (
        <Section className= "our-services">
            <Container className= "services-container">
                <ColumnLeft className = 'col-left'>
                    <p className = 'service-shortdesc' style={{ color: '#F04E31' }}>───── OUR SERVICES</p>
                    <h1>DESIGN CREATIVE <br/>
                        THAT GENERATE <h1 style={{ color: '#F04E31' }} >RESULTS</h1></h1>
                    <p className="service-desc">We offer highly innovative design for the web and mobile. Right from user <br/>
                    interfaces to complete campaigns, our approach to design stems from a vision <br/>
                    for the perfect marriage of aesthetics and functionality.</p>
                </ColumnLeft>
            </Container>
        </Section>
    )
}

export default OurServices;