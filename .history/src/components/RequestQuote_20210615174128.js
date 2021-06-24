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
                <p className = 'project-shortdesc'>───── have a project in mind?</p>
                <div className="left-about">
                    <h1>LET US UNDERSTAND <br/> YOUR BUSINESS <br/>TO PROVIDE A SOLUTION</h1>
                        <div className='service-btn'>
                        <a href="/" target="blank">
                            <Button className='btn' buttonStyle='btn--white' >Learn more</Button>
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
