import React, { useState } from "react";
import './ContactPage.css';

    const ContactPage = () => {
        const [status, setStatus] = useState("Submit");
        const handleSubmit = async (e) => {
          e.preventDefault();
          setStatus("Sending...");
          const { name, email, message } = e.target.elements;
          let details = {
            name: name.value,
            email: email.value,
            message: message.value,
          };
          let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
              "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
          });
          setStatus("Submit");
          let result = await response.json();
          alert(result.status);
        };

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
                <form onSubmit={handleSubmit}>
                    <div>
                        <div>
                            <input placeholder="First Name" type="text" id="name" required />
                        </div>
                        <div>
                            <input placeholder="Last Name" type="text" id="name" required />
                        </div>
                    </div>
                    <div>
                        <div>
                            <input placeholder="Email Address" type="email" id="email" required />
                        </div>
                        <div>
                            <input placeholder="Last Name" type="text" id="name" required />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" required />
                    </div>
                    <button type="submit">{status}</button>
                </form>
            </div>
        </div>
    )
}

export default ContactPage
