import React, { useState, useEffect } from 'react';
import './OurProjects.css';
import { Button } from './Button';

function OurProjects() {
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
    <div className="our-projects">
        <div className="desc">
            <div className="left-desc">
                <p className = 'project-shortdesc' style={{ color: '#F04E31' }}>───── OUR SERVICES</p>
                <h1>WE BUILD SOLUTIONS<br/> 
                WITH <span style={{color: '#F04E31'}} >CREATIVE </span> DESIGN</h1>
            </div>
            <div className="right-desc">
                <p className="project-desc">Client success is measured by result. We have the great team to make an outstanding results.</p>
            </div>
        </div>
        <div className="project-wrapper">
            <ul className="project-1">
                <div>
                    <h6>WEB DESIGN</h6>
                    <p>Our goal is to build you an amazing online web presence. Through 
                    intenser eseaech we design a website to become a sales tool for your business.</p>
                    <div className='service-btn'>
                        <Button className='btn' buttonStyle='btn--outline'>Learn more</Button>
                    </div>
                </div>
                <div>
                    <img src= "./sns.png" alt= "Loading..." />
                </div>
            </ul>
            <ul className="project-2">
                <h6>DIGITAL MARKETING</h6>
                <p>We offer a complete suite of marketing services to fully support clientsfrom initial research 
                 and planning through execution and optimization.</p>
                 <div className='service-btn'>
                    <Button className='btn' buttonStyle='btn--outline'>Learn more</Button>
                </div>
            </ul>
            <ul className="project-3">
                <h6>LOGO DESIGN</h6>
                <p>We craft meaningful brands through visual identity, print and digital experience 
                    for small to medium business.</p>
                 <div className='service-btn'>
                    <Button className='btn' buttonStyle='btn--outline'>Learn more</Button>
                </div>
            </ul>
            <ul className="project-4">
                <h6>SOFTWARE DEVELOPMENT</h6>
                <p>We will help you to organise and manage all your sales, stock, accounting, shipping and 
                    customer data from single place. </p>
                 <div className='service-btn'>
                    <Button className='btn' buttonStyle='btn--outline'>Learn more</Button>
                </div>
            </ul>
        </div>
    </div>
    )
}

export default OurProjects;