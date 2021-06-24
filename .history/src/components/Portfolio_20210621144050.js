import React, { useState, useEffect } from 'react';
import './Portfolio.css';
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
        <div className="portfolio">
            <h1>One5 Digital works with you to understand <br/> your business, your product, your competitors <br/> 
            and most importantly your customers.</h1>
            <div className='portfolio-btn'>
                <a href="#" target="blank">
                    <Button className='btn' buttonStyle='btn--white' >Explore Our Projects</Button>
                </a>
            </div>
        </div>
    )
}

export default Portfolio
