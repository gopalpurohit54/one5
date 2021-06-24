import React from 'react';
import './Expertize.css';

function Expertize() {
    return (
        <div className="about-page">
            <div className="ab-desc">
                <div className="ab-left">
                    <h1>WE ARE ONE5<span style={{color: '#F04E31'}} >DIGITAL </span></h1>
                    <p>We are a digital marketing agency based in Melbourne, Australia, working internationally.</p> <br/>
                    <p>We believe that creating memorable experiences are the best way to connect with your consumers. </p> <br/>
                    <p>From dynamic web designs to cutting-edge digital marketing strategies, we believe that the custom solutions we create today will transcend the trends of tomorrow.</p> <br/>
                    <p>No matter your product or service, you have a story to tell.</p>
                </div>
            </div>
            <div className="ab-right">
                <img className="ab-vector" src= "./about-one5-circle-vector.png" alt= "Loading..." />
            </div>
        </div>
    )
}

export default Expertize;
