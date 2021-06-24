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
            <div className="project-1">
                <h6>Shree & Samarth</h6>
                <p>100% biodegradable and sustainably sourced bamboo wipes have been brought to Australian enviroment to 
                    continuous support green environment and running an environmentally friendly business like us helps 
                    reduce impact on the environment.</p>
                <div className='service-btn'>
                    <Button className='btn' buttonStyle='btn--white'>View Project</Button>
                </div>
            </div>
            <div>
                <img src= "./sns.png" alt= "Loading..." />
            </div>
            <div className="project-2">
                <h6>DIGITAL MARKETING</h6>
                <p>We offer a complete suite of marketing services to fully support clientsfrom initial research 
                 and planning through execution and optimization.</p>
                <div className='service-btn'>
                    <Button className='btn' buttonStyle='btn--white'>View Project</Button>
                </div>
            </div>
            <div>
                <img src= "./sns.png" alt= "Loading..." />
            </div>
            <div className="project-3">
                <h6>LOGO DESIGN</h6>
                <p>We craft meaningful brands through visual identity, print and digital experience 
                    for small to medium business.</p>
                <div className='service-btn'>
                    <Button className='btn' buttonStyle='btn--white'>View Project</Button>
                </div>
            </div>
            <div>
                <img src= "./sns.png" alt= "Loading..." />
            </div>
            <div className="project-4">
                <h6>SOFTWARE DEVELOPMENT</h6>
                <p>We will help you to organise and manage all your sales, stock, accounting, shipping and 
                    customer data from single place.</p>
                <div className='service-btn'>
                    <Button className='btn' buttonStyle='btn--white'>View Project</Button>
                </div>
            </div>
            <div>
                <img src= "./sns.png" alt= "Loading..." />
            </div>
        </div>
    </div>
    )
}

export default OurProjects;