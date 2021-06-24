import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-wrapper">
                <ul className="add-1">
                    <h6>MELBOURNE</h6>
                    <p>28-4 Lamington Dr, Tarneit VIC 3029, <br/> Australia.</p>
                    <div className="call"><img src="./phone-icon.png" /> 0430 176 036 </div> 
                </ul>
                <ul className="add-2">
                    <h6>KENTUCKY</h6>
                    <p>3900 Crossby Dr, 2524, Lexington, <br/> KY 40515, USA</p>
                    <div className="call"><img src="./phone-icon.png" /> + 1 786 614 9091 </div> 
                </ul>
                <ul className="site-links">
                    <p>HOME</p><br/>
                    <p>ABOUT</p><br/>
                    <p>SERVICES</p><br/>
                    <p>PROJECTS</p><br/>
                    <p>CONTACT</p>
                </ul>
                <ul className="follow-us">
                    <h6>SOFTWARE DEVELOPMENT</h6>
                    <p>We will help you to organise and manage all your sales, stock, accounting, shipping and 
                        customer data from single place. </p>
                    
                </ul>
            </div>
        </div>
    )
}

export default Footer
