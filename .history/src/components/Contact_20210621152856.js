import React, { useState, useEffect } from 'react';
import './Contact.css';
import { Button } from './Button';

function Contact() {
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
            <div className="contact-left">
                <p className = 'contact-shortdesc' style={{ color: '#FFF' }}>───── READY TO DISCUSS YOUR NEXT PROJECT?</p>
                <h1>let’s create your <br/> success together</h1>
                <div className='contact-btn'>
                    <a href="#" target="blank">
                        <Button className='btn' buttonStyle='btn--white' >Explore Our Projects</Button>
                    </a>
                </div>
            </div>
            <div className="contact-right">
                <img className="con-img" src= "./redball.gif" alt= "Loading..." />
            </div>
        </div>
    )
}

export default Contact
