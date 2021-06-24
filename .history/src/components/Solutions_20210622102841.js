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
                <ul className="sol-list">
                    <li className="sol-items">Document Management</li>
                    <li className="sol-items">Project Management</li>
                    <li className="sol-items">Time Tracking</li>
                    <li className="sol-items">Sales & Marketing Automation</li>
                </ul>
            </ul>
            <ul className="solution-2">
                <h6>POS & WAREHOUSE <br/>MANAGEMENT SOFTWARE</h6>
                <ul className="sol-list">
                    <li className="sol-items">Inventory Management</li>
                    <li className="sol-items">Warehouse Management</li>
                    <li className="sol-items">Barcode Scanning</li>
                    <li className="sol-items">Multichannel Sales</li>
                </ul>
            </ul>
            <ul className="solution-3">
                <h6>FINANCIAL MANAGEMENT <br/> & ACCOUNTING</h6>
                <ul className="sol-list">
                    <li className="sol-items">Budgeting & Planning</li>
                    <li className="sol-items">Invoicing & Billing</li>
                    <li className="sol-items">Expence Management</li>
                    <li className="sol-items">Revenue Management</li>
                </ul>
            </ul>
            <ul className="solution-4">
                <h6>CUSTOM ECOMMERCE <br/> SOLUTIONS</h6>
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

export default Solutions
