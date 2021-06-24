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
                    <ul className="row1-items">
                        <li className="retail"><h6>RETAIL</h6></li>
                        <li className="health">HEALTHCARE</li>
                        <li className="manufacture">MANUFACTURING</li>
                        <li className="construction">CONSTRUCTION</li>
                    </ul>
                </div>
                <div className="row-2">
                    <ul className="row2-items">
                        <li className="realestate">REAL ESTATE</li>
                        <li className="financial">FINANCIAL <br/> SERVICES</li>
                        <li className="entertainment">ENTERTAINMENT</li>
                        <li className="publicservice">PUBLIC SERVICE</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Industries
