import React from 'react';
import './Benefits.css';

function Benefits() {
    return (
        <div className="benefits">
            <div>
                <h1>BENEFITS OF CUSTOM<br/> 
                SOFTWARE DEVELOPMENT</h1>
                <p>A distinctive feature of custom software is that, because it is designed to achieve<br/>
                 unique goals, it is usually created from scratch and does not have analogous <br/>
                 applications on the market.</p>
            </div>
            <div className="benefit-wrapper">
                <ul className="benefit-1">
                    <img src= "./website1.png" alt= "Loading..." />
                    <h6>OPTIMISED<br/> BUSINESS PROCESS</h6>
                </ul>
                <ul className="benefit-2">
                    <img src= "./key.png" alt= "Loading..." />
                    <h6>FULL<br/> OWNERSHIP</h6>
                </ul>
                <ul className="benefit-3">
                    <img src= "./responsive1.png" alt= "Loading..." />
                    <h6>FULL<br/> FLEXIBILITY</h6>
                </ul>
                <ul className="benefit-4">
                    <img src= "./wall-clock.png" alt= "Loading..." />
                    <h6>FAST<br/> INTEGRATION</h6>
                </ul>
            </div>
        </div>
    )
}

export default Benefits
