import React from 'react';
import './Expertize.css';

function Expertize() {
    return (
        <div className="expertize">
            <div className="exp-left">
                <img className="exp-img" src= "./expert-about.png" alt= "Loading..." />
            </div>
            <div className="exp-right">
                <h1>WEARE EXPERTS IN</h1>
                <ul className="exp-list">
                    <li className="exp-items">Branding</li>
                    <li className="exp-items">Website Design</li>
                    <li className="exp-items">Digital Marketing</li>
                    <li className="exp-items">Website Development</li>
                    <li className="exp-items">Custom Software Development</li>
                    <li className="exp-items">Ecommerce Website Development</li>
                    <li className="exp-items">Search Engine Optimization</li>
                    <li className="exp-items">Pay-per-click Management</li>
                </ul>
            </div>
        </div>
    )
}

export default Expertize;
