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
                        <li className="retail"><h6 style={{ color: '#fff' }}>RETAIL</h6></li>
                        <li className="health"><h6 style={{ color: '#fff' }}>HEALTHCARE</h6></li>
                        <li className="manufacture"><h6 style={{ color: '#fff' }}>MANUFACTURING</h6></li>
                        <li className="construction"><h6 style={{ color: '#fff' }}>CONSTRUCTION</h6></li>
                    </ul>
                </div>
                <div className="row-2">
                    <ul className="row2-items">
                        <li className="realestate"><h6 style={{ color: '#fff' }}>REAL ESTATE</h6></li>
                        <li className="financial"><h6 style={{ color: '#fff' }}>FINANCIAL <br/> SERVICES</h6></li>
                        <li className="entertainment"><h6 style={{ color: '#fff' }}>ENTERTAINMENT</h6></li>
                        <li className="publicservice"><h6 style={{ color: '#fff' }}>PUBLIC SERVICE</h6></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Industries
