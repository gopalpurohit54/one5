import React, { useState, useEffect } from 'react';
import './RequestQuote.css';
import { Button } from './Button';

function RequestQuote() {
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
        <div className="request-quote">
            <div className="desc">
                <p className = 'project-shortdesc' style={{ color: '#F04E31' }}>───── ABOUT US</p>
                <div className="left-about">
                    <h1>WHAT WE <span style={{color: '#F04E31'}} >BELIEVE </span></h1>
                    <p>We believe that creating memorable experiences are the best way <br/>
                        to connect with your consumers. From dynamic web designs to <br/>
                        cutting-edge digital marketing strategies, we believe that the <br/>
                        custom solutions we create today will transcend the trends of <br/>
                        tomorrow. No matter your product or service, you have a story to tell.</p>
                        <div className='service-btn'>
                        <a href="/" target="blank">
                            <Button className='btn' buttonStyle='btn--outline' >Learn more</Button>
                        </a>
                    </div>
                </div>
                <div className="right-about">
                    <img src= "./one5-circle-vector-red.png" alt= "Loading..." />
                </div>
            </div>
        </div>
    )
}

export default RequestQuote
