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
                    <div className="bene-visible">
                        <img src= "./website1.png" alt= "Loading..." />
                        <h6>OPTIMISED<br/> BUSINESS PROCESS</h6>
                    </div>
                    <div className="bene-desc">
                        <h6 className="bene-hover">OPTIMISED <br/> BUSINESS PROCESS</h6>
                        <p className="hover-desc">Having software custom built for your organisation’s specific needs can better suit the business and bring a more competitive advantage, setting you apart from the competition in the process.</p>
                    </div>
                </ul>
                <ul className="benefit-2">
                    <div className="bene-visible">
                        <img src= "./key.png" alt= "Loading..." />
                        <h6>FULL<br/> OWNERSHIP</h6>
                    </div>
                </ul>
                <ul className="benefit-3">
                    <div className="bene-visible">
                        <img src= "./responsive1.png" alt= "Loading..." />
                        <h6>FULL<br/> FLEXIBILITY</h6>
                    </div>
                </ul>
                <ul className="benefit-4">
                    <div className="bene-visible">
                        <img src= "./wall-clock.png" alt= "Loading..." />
                        <h6>FAST<br/> INTEGRATION</h6>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Benefits
