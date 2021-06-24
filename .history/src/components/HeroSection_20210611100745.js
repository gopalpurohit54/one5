import React from 'react';

function HeroSection() {
    return (
        <div className= 'hero-container'>
            <div className= 'left-content'>
                <p>WE ARE</p>
                <h1>A FULL SERVICE <br/>
                DIGITAL AGENCY</h1>
                <p>Our creative team is focused on stunning and results driven <br/>
                solutions for small to medium business all over the world.</p>
            </div>
            <div className= 'right-content'>
                <video src='../Assests/red-blob-hq.gif' />
            </div>
        </div>
    )
}

export default HeroSection
