import React, { useState, useEffect } from 'react';
import './OurServices.css';
import { Button } from './Button';

function OurServices() {
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
        <div className="service-wrapper">
            <ul className="service-1">
                <h6>WEB DESIGN</h6>
                <p>Our goal is to build you an amazing online web presence. Through 
                 intenser eseaech we design a website to become a sales tool for your business.</p>
                 <div className='service-btn'>
                    <Button className='btn' buttonStyle='btn--outline'>Learn more</Button>
                </div>
            </ul>
        </div>
    </div>
    )
}

export default OurServices;