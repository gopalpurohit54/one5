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
            <p>“Thanks a lot, Highly Recommended. Prince and team (15 Digital) helped<br/>
             me to get my website up and running in 10 days. He also took care of all<br/>
             the content and graphics. Excellent work, I will have all my friends call you <br/>
             for trade website.”</p>
            <p style={{ color: '#F04E31' }}>──────────</p>
            <p>Nathan, Owner, Modern Heating & Cooling</p> 
            <div className='testimonial-btn'>
                <a href="#" target="blank">
                    <Button className='btn' buttonStyle='btn--white' >Explore Our Projects</Button>
                </a>
            </div>
            <div className="page-arrows">
                <p>01 - 05</p>
            </div>
        </div>
    )
}

export default Portfolio
