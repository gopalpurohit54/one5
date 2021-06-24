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
                <ul className="solution-1">
                    <img src= "./factory.png" alt= "Loading..." />
                    <h6>ENTERPRISE RESOURCE &<br/> PROCESS MANAGEMENT</h6>
                    <ul className="sol-list">
                        <li className="sol-items">Document Management</li>
                        <li className="sol-items">Project Management</li>
                        <li className="sol-items">Time Tracking</li>
                        <li className="sol-items">Sales & Marketing Automation</li>
                    </ul>
                </ul>
            </div>
        </div>
    )
}

export default Benefits
