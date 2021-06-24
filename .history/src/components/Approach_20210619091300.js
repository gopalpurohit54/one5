import React from 'react';
import './Approach.css';

function Approach() {
    return (
        <div className="approach">
            <div className="app-desc">
                <div className="app-left">
                    <img className="exp-img" src= "./expert-about.png" alt= "Loading..." />
                </div>
                <div className="app-right">
                    <h1>WEARE EXPERTS IN</h1>
                    <ul className="app-list">
                        <li className="app-items">Branding</li>
                        <li className="app-items">Website Design</li>
                        <li className="app-items">Digital Marketing</li>
                        <li className="app-items">Website Development</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Approach;
