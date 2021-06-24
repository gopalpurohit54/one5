import React from 'react';
import './Solutions.css';

function Solutions() {
    return (
        <div className="solutions">
        <div>
            <h1>WE OFFER TAILORED SOLUTIONS<br/> 
            FOR EVERY TYPE OF BUSINESS PROCESS</h1>
        </div>
        <div className="solution-wrapper">
            <ul className="solution-1">
                <h6>WEB DESIGN</h6>
                <p>Our goal is to build you an amazing online web presence. Through 
                 intenser eseaech we design a website to become a sales tool for your business.</p>
            </ul>
            <ul className="solution-2">
                <h6>DIGITAL MARKETING</h6>
                <p>We offer a complete suite of marketing services to fully support clientsfrom initial research 
                 and planning through execution and optimization.</p>
            </ul>
            <ul className="solution-3">
                <h6>LOGO DESIGN</h6>
                <p>We craft meaningful brands through visual identity, print and digital experience 
                    for small to medium business.</p>
            </ul>
            <ul className="solution-4">
                <h6>SOFTWARE DEVELOPMENT</h6>
                <p>We will help you to organise and manage all your sales, stock, accounting, shipping and 
                    customer data from single place. </p>
            </ul>
        </div>
    </div>
    )
}

export default Solutions
