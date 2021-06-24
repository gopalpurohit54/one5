import React from 'react';
import './Expertize.css';

function Expertize() {
    return (
        <div className="expertize">
            <div className="exp-desc">
                <div className="exp-left">
                    <img className="exp-img" src= "./expert-about.png" alt= "Loading..." />
                </div>
                <div className="exp-right">
                    <h1>WEARE EXPERTS IN</h1>
                    <p>We are a digital marketing agency based in Melbourne, Australia, working internationally.</p> <br/>
                    <p>We believe that creating memorable experiences are the best way to connect with your consumers. </p> <br/>
                    <p>From dynamic web designs to cutting-edge digital marketing strategies, we believe that the custom solutions we create today will transcend the trends of tomorrow.</p> <br/>
                    <p>No matter your product or service, you have a story to tell.</p>
                </div>
            </div>
        </div>
    )
}

export default Expertize;
