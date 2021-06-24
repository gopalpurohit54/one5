import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="add-1">
                <h6>MELBOURNE</h6>
                <p>28-4 Lamington Dr, Tarneit VIC 3029, <br/> Australia</p>
                <div className="call"><img src="./phone-icon.png" /> 0430 176 036 </div> 
            </div>
            <div className="footer-wrapper">
                <ul className="add-1">
                    <h6>WEB DESIGN</h6>
                    <p>Our goal is to build you an amazing online web presence. Through 
                    intenser eseaech we design a website to become a sales tool for your business.</p>
                    <div className='service-btn'>
                        <Button className='btn' buttonStyle='btn--outline'>Learn more</Button>
                    </div>
                </ul>
                <ul className="add-2">
                    <h6>DIGITAL MARKETING</h6>
                    <p>We offer a complete suite of marketing services to fully support clientsfrom initial research 
                    and planning through execution and optimization.</p>
                    <div className='service-btn'>
                        <Button className='btn' buttonStyle='btn--outline'>Learn more</Button>
                    </div>
                </ul>
                <ul className="site-links">
                    <h6>LOGO DESIGN</h6>
                    <p>We craft meaningful brands through visual identity, print and digital experience 
                        for small to medium business.</p>
                    <div className='service-btn'>
                        <Button className='btn' buttonStyle='btn--outline'>Learn more</Button>
                    </div>
                </ul>
                <ul className="follow-us">
                    <h6>SOFTWARE DEVELOPMENT</h6>
                    <p>We will help you to organise and manage all your sales, stock, accounting, shipping and 
                        customer data from single place. </p>
                    <div className='service-btn'>
                        <Button className='btn btn--outline btn--medium' buttonStyle='btn--outline'>Learn more</Button>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Footer
