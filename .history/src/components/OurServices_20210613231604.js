import React from 'react';
import './OurServices.css';
import Container from 'react-bootstrap/Container'

function OurServices() {
    return(
    <div className="our-services">
        <div>
            <p className = 'service-shortdesc' style={{ color: '#F04E31' }}>───── OUR SERVICES</p>
            <h1>DESIGN CREATIVE<br/> 
            THAT GENERATE <span style={{color: '#F04E31'}} >RESULTS </span></h1>
            <p className="service-desc">We offer highly innovative design for the web and mobile. Right from user <br/>  
            interfaces to complete campaigns, our approach to design stems from a vision <br/> 
            for the perfect marriage of aesthetics and functionality.</p>
        </div>
        <div>
        <Container>
  <Row md={4}>
    <Col>1 of 3</Col>
    <Col xs={6}>2 of 3</Col>
    <Col>3 of 3</Col>
  </Row>
</Container>
        </div>
    </div>
    )
}

export default OurServices;