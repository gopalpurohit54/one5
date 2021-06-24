import React from 'react';
// import './OurServices.css';

*{
    padding: 5rem 5rem;
}

function OurServices() {
    return(
    <div className="our-services">
        <p className = 'service-shortdesc' style={{ color: '#F04E31' }}>───── OUR SERVICES</p>
        <h1>DESIGN CREATIVE<br/> 
        THAT GENERATE <span style={{color: '#F04E31'}} >RESULTS </span></h1>
        <p className="service-desc">We offer highly innovative design for the web and mobile. Right from user <br/>  
        interfaces to complete campaigns, our approach to design stems from a vision <br/> 
        for the perfect marriage of aesthetics and functionality.</p>
    </div>
    )
}

export default OurServices;