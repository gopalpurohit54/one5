import React from 'react';
import './AboutUs.css';

function AboutUs() {
    return (
        <div className="about-us">
            <div className="desc">
                <p className = 'project-shortdesc' style={{ color: '#F04E31' }}>───── ABOUT US</p>
                <div className="left-desc">
                    <h1>WHAT WE <span style={{color: '#F04E31'}} >BELIEVE </span></h1>
                </div>
                <div className="right-desc">
                    <p className="project-desc">Client success is measured by result.<br/> We have the great team to make <br/> an outstanding results.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
