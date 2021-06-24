import React from 'react';
import './Project.css';

function Project() {
    return (
        <div className="project">
            <div>
                <h1>OUR PROJECTS </h1>
                <p>We offer highly innovative design for the web and mobile.<br/>
                Right from user interfaces to complete campaigns, our approach to design stems <br/> 
                from a vision for the perfect marriage of aesthetics and functionality.</p>
            </div>
            <div className="pro-wrapper">
                <div className="prorow-1">
                    <ul className="prorow1-items">
                        <li>
                            <img src="./essentiallybrands.png" />
                            <h6>PROJECT<p>ESSENTIALLY BRANDS</p></h6>
                        </li>
                    </ul>
                </div>
                <div className="prorow-2">
                    <ul className="prorow2-items">
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Project
