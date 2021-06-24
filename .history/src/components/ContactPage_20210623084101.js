import React, { useState, useEffect } from 'react';
import './ContactPage.css';
import { Button } from './Button';

    
function ContactPage() {
        const [button, setButton] = useState(true);
        
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };
    
    useEffect ( ( ) => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <div className="contactpage">
            <div className="con-left">
                <h1>CONTACT US</h1>
                <p>We're passionate about innovation, brilliant ideas and <br/>
                the execution that brings it all together in one beautiful <br/>
                experience.</p> <br/>
                <p>If you are too, call us or send us an email to get started.</p>
                <div className="con-wrapper">
                    <ul className="add-1">
                        <h6>MELBOURNE</h6>
                        <p>28-4 Lamington Dr, Tarneit VIC 3029, <br/> Australia.</p>
                        <div className="call"><img className="call-icon" src="./phone-icon.png" /> <p>0430 176 036</p> </div> 
                    </ul>
                    <ul className="add-2">
                        <h6>KENTUCKY</h6>
                        <p>3900 Crossby Dr, 2524, Lexington, <br/> KY 40515, USA.</p>
                        <div className="call"><img className="call-icon" src="./phone-icon.png" /> <p>+ 1 786 614 9091</p> </div> 
                    </ul>
                </div>
            </div>
            <div className="con-right">
                <form action="#">
                    <div className="form-row">
                        <div className="input-data">
                            <input type="text" />
                            <label>First Name</label>   
                        </div>
                        <div className="input-data">
                            <input type="text" />
                            <label>Last Name</label>  
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-data">
                            <input type="text" />
                            <label>Email Address</label>   
                        </div>
                        <div className="input-data">
                            <input type="text" />
                            <label>Phone Number</label>  
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-data textarea">
                            <textarea cols="30" rows="10" />
                            <label>Describe your project</label>   
                        </div>
                    </div>
                    <div className="form-row submit-btn">
                        <div className="inner"></div>
                            <Button className='btn' buttonStyle='btn--outline' type="submit">Send Message</Button>
                        
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactPage
