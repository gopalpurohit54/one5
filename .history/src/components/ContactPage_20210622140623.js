import React from 'react';
import './ContactPage.css';

function ContactPage() {
    return (
        <div className="contactpage">
            <div className="con-left">
                <h1>CONTACT US</h1>
                <p>We're passionate about innovation, brilliant ideas and <br/>
                the execution that brings it all together in one beautiful <br/>
                experience.</p> <br/>
                <p>If you are too, call us or send us an email to get started.</p>
                <div>
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
                </div>
            </div>
            <div className="con-right">
                
            </div>
        </div>
    )
}

export default ContactPage
