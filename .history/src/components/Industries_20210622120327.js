import React from 'react';
import './Industries.css';

function Industries() {
    return (
        <div className="industries">
            <div>
                <h1>WE DEVELOP ALL TYPES<br/> 
                OF INDUSTRY-SPECIFIC SOFTWARE</h1>
                <p>A distinctive feature of custom software is that, because it is designed to achieve <br/>
                 unique goals, it is usually created from scratch and does not have analogous<br/>
                 applications on the market. </p>
            </div>
            <div className="industry-wrapper">
                <div className="row-1">
                    <ul>
                        <li>RETAIL</li>
                        <li>HEALTHCARE</li>
                        <li>MANUFACTURING</li>
                        <li>CONSTRUCTION</li>
                    </ul>
                </div>
                <div className="row-2">
                    <ul>
                        <li>REAL ESTATE</li>
                        <li>FINANCIAL <br/> SERVICES</li>
                        <li>ENTERTAINMENT</li>
                        <li>PUBLIC SERVICE</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Industries
