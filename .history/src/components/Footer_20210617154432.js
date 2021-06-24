import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-wrapper">
                <ul className="add-1">
                    <h6>MELBOURNE</h6>
                    <p>28-4 Lamington Dr, Tarneit VIC 3029, <br/> Australia.</p>
                    <div className="call"><img className="call-icon" src="./phone-icon.png" /> 0430 176 036 </div> 
                </ul>
                <ul className="add-2">
                    <h6>KENTUCKY</h6>
                    <p>3900 Crossby Dr, 2524, Lexington, <br/> KY 40515, USA.</p>
                    <div className="call"><img className="call-icon" src="./phone-icon.png" /> + 1 786 614 9091 </div> 
                </ul>
                <ul className="site-links">
                    <li><a>HOME</a></li>
                    <li><a>ABOUT</a></li>
                    <li><a>SERVICES</a></li>
                    <li><a>PROJECTS</a></li>
                    <li><a>CONTACT</a></li>
                </ul>
                <ul className="follow-us">
                    <h6>FOLLOW US:</h6>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-facebook"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-linkedin"></i>
                </ul>
            </div>
            <div className="copyright">
                <div className="copy-left">
                    <p className="left-p">Terms & Conditions</p>
                    <p className="left-p">Pivacy Policy</p>
                </div>
                <div className="copy-right">
                    <p className="right-p">Copyright ©2017 All rights reserved by one5 digital</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
