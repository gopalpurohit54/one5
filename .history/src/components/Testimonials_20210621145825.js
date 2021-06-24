import React, { useState, useEffect } from 'react';
import './Testimonials.css';
import { Button } from './Button';

function Portfolio() {
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
        <div className="testimonials">
            <h1>what Our clients say</h1>
            <div className='testimonial-btn'>
                <a href="#" target="blank">
                    <Button className='btn' buttonStyle='btn--white' >Explore Our Projects</Button>
                </a>
            </div>
        </div>
    )
}

export default Portfolio
