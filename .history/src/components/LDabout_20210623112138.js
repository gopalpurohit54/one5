import React from 'react';
import './LDabout.css';
import { Link } from 'react-router-dom';

function LDabout() {
    return (
        <div className="ldabout">
            <Link exact to="/ServicePage"><p>BACK TO SERVICES</p></Link>
           <div className="ld-desc">

           </div>
        </div>
    )
}

export default LDabout
