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
                    <div className="bene-desc">
                        <h6 className="bene-hover">FULL<br/> OWNERSHIP</h6>
                        <p className="hover-desc">Once we finish development, we pass over the complete source code so that your project is yours – no fees or strings attached. Whether you want to continue working with us for maintenance or take the project internal is up to you.</p>
                    </div>
                </ul>
                <ul className="benefit-3">
                    <div className="bene-visible">
                        <img src= "./responsive1.png" alt= "Loading..." />
                        <h6>FULL<br/> FLEXIBILITY</h6>
                    </div>
                    <div className="bene-desc">
                        <h6 className="bene-hover">FULL<br/> FLEXIBILITY</h6>
                        <p className="hover-desc">Custom software solutions can adapt to the growth of a business and be easily edited during trialling. This offers flexibility to account for company expansion or altered objectives and ensure longevity to the system.</p>
                    </div>
                </ul>
                <ul className="benefit-4">
                    <div className="bene-visible">
                        <img src= "./wall-clock.png" alt= "Loading..." />
                        <h6>FAST<br/> INTEGRATION</h6>
                    </div>
                    <div className="bene-desc">
                        <h6 className="bene-hover">FAST<br/> INTEGRATION</h6>
                        <p className="hover-desc">Developing a solution that meets your specific business model allows to make all the necessary integrations from the outset. Whether using new or already installed hardware or linking to existing systems there are no limitations.</p>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Benefits
