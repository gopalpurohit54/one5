import React from 'react';
import './AboutUs.css';

function AboutUs() {
    return (
        <div className="about-us">
            <div className="desc">
                <p className = 'project-shortdesc' style={{ color: '#F04E31' }}>───── ABOUT US</p>
                <div className="left-desc">
                    <h1>WHAT WE <span style={{color: '#F04E31'}} >BELIEVE </span></h1>
                    <p>We believe that creating memorable experiences are the best way 
                        to connect with your consumers. From dynamic web designs to 
                        cutting-edge digital marketing strategies, we believe that the 
                        custom solutions we create today will transcend the trends of 
                        tomorrow. No matter your product or service, you have a story to tell.</p>
                </div>
                <div className="right-desc">
                    <p className="project-desc">Client success is measured by result.<br/> We have the great team to make <br/> an outstanding results.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
