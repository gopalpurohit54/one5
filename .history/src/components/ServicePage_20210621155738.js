import React, { useState, useEffect } from 'react';
import './ServicePage.css';
import { Button } from './Button';

function ServicePage() {
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
        <div className="contact">
            <div className="desc">
                <p className = 'contact-shortdesc'>───── READY TO DISCUSS YOUR NEXT PROJECT?</p>
                <div className="left-contact">
                    <h1>LET'S CREATE YOUR <br/> SUCCESS TOGETHER</h1>
                        <div className='contact-btn'>
                        <a href="/" target="blank">
                            <Button className='btn' buttonStyle='btn--white' >Get in Touch</Button>
                        </a>
                    </div>
                </div>
                <div className="right-contact">
                    <img className="red-ball" src= "./red-ball.gif" alt= "Loading..." />
                </div>
            </div>
        </div>
    )
}

export default ServicePage;
