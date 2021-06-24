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
                <h6>ENTERPRISE RESOURCE &<br/> PROCESS MANAGEMENT</h6>
                <ul className="sol1-list">
                    <li className="sol1-items">Document Management</li>
                    <li className="sol1-items">Project Management</li>
                    <li className="sol1-items">Time Tracking</li>
                    <li className="sol1-items">Sales & Marketing Automation</li>
                </ul>
            </ul>
            <ul className="solution-2">
                <h6>POS & WAREHOUSE <br/>MANAGEMENT SOFTWARE</h6>
                <p>We offer a complete suite of marketing services to fully support clientsfrom initial research 
                 and planning through execution and optimization.</p>
            </ul>
            <ul className="solution-3">
                <h6>FINANCIAL MANAGEMENT <br/> & ACCOUNTING</h6>
                <p>We craft meaningful brands through visual identity, print and digital experience 
                    for small to medium business.</p>
            </ul>
            <ul className="solution-4">
                <h6>CUSTOM ECOMMERCE <br/> SOLUTIONS</h6>
                <p>We will help you to organise and manage all your sales, stock, accounting, shipping and 
                    customer data from single place. </p>
            </ul>
        </div>
    </div>
    )
}

export default Solutions
