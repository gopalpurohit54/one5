import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

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
                    <li><Link to="/" className="site-links">HOME</Link></li>
                    <li><Link to="/About" className="site-links">ABOUT</Link></li>
                    <li><Link to="/Services" className="site-links">SERVICES</Link></li>
                    <li><Link to="/Projects" className="site-links">PROJECTSs</Link></li>
                    <li><Link to="/Contact" className="site-links">CONTACT</Link></li>
                </ul>
                <ul className="follow-us">
                    <h6>FOLLOW US:</h6>
                    <a className="social" href="#"><i class="fab fa-instagram"></i></a>
                    <a className="social" href="#"><i class="fab fa-facebook-f"></i></a>
                    <a className="social" href="#"><i class="fab fa-twitter"></i></a>
                    <a className="social" href="#"><i class="fab fa-linkedin-in"></i></a>
                </ul>
            </div>
            <div className="copyright">
                <div className="copy-left">
                    <p className="left-p1">Terms & Conditions</p>
                    <p className="left-p2">Pivacy Policy</p>
                </div>
                <div className="copy-right">
                    <p className="right-p">Copyright ©2017 All rights reserved by one5 digital</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
