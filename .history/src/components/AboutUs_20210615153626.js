import React, { useState, useEffect } from 'react';
import './AboutUs.css';
import { Button } from './Button';

function AboutUs() {
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
        <div className="about-us">
            <div className="desc">
                <p className = 'project-shortdesc' style={{ color: '#F04E31' }}>───── ABOUT US</p>
                <div className="left-desc">
                    <h1>WHAT WE <span style={{color: '#F04E31'}} >BELIEVE </span></h1>
                    <p>We believe that creating memorable experiences are the best way <br/>
                        to connect with your consumers. From dynamic web designs to <br/>
                        cutting-edge digital marketing strategies, we believe that the <br/>
                        custom solutions we create today will transcend the trends of <br/>
                        tomorrow. No matter your product or service, you have a story to tell.</p>
                        <div className='service-btn'>
                        <a href="https://snsbabycare.com.au/" target="blank">
                            <Button className='btn' buttonStyle='btn--outline' >View Project</Button>
                        </a>
                    </div>
                </div>
                <div className="right-desc">
                    <p className="project-desc">Client success is measured by result.<br/> We have the great team to make <br/> an outstanding results.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
