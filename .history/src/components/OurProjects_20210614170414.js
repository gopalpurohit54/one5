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
                <h6>Ausport Superstore</h6>
                <p>Established in a small warehouse in 1964, Ausport SuperStore has grown steadily to become one the largest, 
                    specialist sporting goods retailers in Australia.</p>
                <div className='service-btn'>
                    <Button className='btn' buttonStyle='btn--white'>View Project</Button>
                </div>
            </div>
            <div>
                <img src= "./ausport.png" alt= "Loading..." />
            </div>
            <div className="project-3">
                <h6>Tiffany Shen</h6>
                <p>Miss Tiffany Shen is the proud winner of Miss Australia International 2020. This is a worldwide movement that recognizes and 
                    celebrates women whose voices strive to make a difference.</p>
                <div className='service-btn'>
                    <Button className='btn' buttonStyle='btn--white'>View Project</Button>
                </div>
            </div>
            <div>
                <img src= "./tiffany.png" alt= "Loading..." />
            </div>
            <div className="project-4">
                <h6>Essentially Brands</h6>
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