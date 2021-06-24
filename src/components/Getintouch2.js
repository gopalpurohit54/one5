import React, { useState, useEffect } from 'react';
import './Getintouch2.css';
import { Button } from './Button';

function Getintouch2() {
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
                <p className = 'contact-shortdesc'>───── HAVE A PROJECT IN MIND?</p>
                <div className="left-contact">
                    <h1>LET US UNDERSTAND <br/> YOUR BUSINESS <br/> TO PROVIDE A SOLUTION</h1>
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

export default Getintouch2
