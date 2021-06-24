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
                    <Button className='btn' buttonStyle='btn--outline'>Explore Our Work</Button>
            </div>
        </div>
    )
}

export default Portfolio
