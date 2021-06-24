import React, { useState, useEffect } from 'react';
import './Project.css';
import { Button } from './Button';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom";

function Project() {
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
        <Router>
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
                            <Link exact to="/Projects/EssentiallyBrands">
                            <img className="proimg" src="./essentiallybrands.png" /></Link>
                            <h6>PROJECT:<p>ESSENTIALLY BRANDS</p></h6>
                        </li>
                        <li>
                            <img className="proimg" src="./accord.png" />
                            <h6>PROJECT:<p>ACCORD RETAIL</p></h6>
                        </li>
                        <li>
                            <img className="proimg" src="./tiff.png" />
                            <h6>PROJECT:<p>TIFFANY SHEN</p></h6>
                        </li>
                        <li>
                            <img className="proimg" src="./aus.png" />
                            <h6>PROJECT:<p>AUSPORT</p></h6>
                        </li>
                    </ul>
                </div>
                <div className="prorow-2">
                    <ul className="prorow2-items">
                        <li>
                            <img className="proimg" src="./motor.png" />
                            <h6>PROJECT:<p>MOTOR COMPONENTS</p></h6>
                        </li>
                        <li>
                            <img className="proimg" src="./stagedhome.png" />
                            <h6>PROJECT:<p>STAGED HOMES BY MELISSA</p></h6>
                        </li>
                        <li>
                            <img className="proimg" src="./snsbaby.png" />
                            <h6>PROJECT:<p>SHREE & SAMARTH</p></h6>
                        </li>
                        <li>
                            <img className="proimg" src="./tgarden.png" />
                            <h6>PROJECT:<p>T-GARDEN FRUIT & VEGETABLE</p></h6>
                        </li>
                    </ul>
                </div>
                <div className="prorow-3">
                    <ul className="prorow3-items">
                        <li>
                            <img className="proimg" src="./drgreen.png" />
                            <h6>PROJECT:<p>DR GREEN COSMETIC GROUP</p></h6>
                        </li>
                        <li>
                            <img className="proimg" src="./hardware.png" />
                            <h6>PROJECT:<p>AUSTRALIAN HARDWARE JOURNAL</p></h6>
                        </li>
                        <li>
                            <img className="proimg" src="./power.png" />
                            <h6>PROJECT:<p>POWER EQUIPMENT AUSTRALASIA</p></h6>
                        </li>
                        <li>
                            <img className="proimg" src="./paul.png" />
                            <h6>PROJECT:<p>PAUL RYAN PLUMBING & CONTRACTING</p></h6>
                        </li>
                    </ul>
                </div>
                <div className="prorow-4">
                    <ul className="prorow4-items">
                        <li>
                            <img className="proimg" src="./poke.png" />
                            <h6>PROJECT:<p>POKE N POP COLLECT</p></h6>
                        </li>
                        <li>
                            <img className="proimg" src="./bayside.png" />
                            <h6>PROJECT:<p>BAYSIDE SKIN & LASER</p></h6>
                        </li>
                        <li>
                            <img className="proimg" src="./cover.png" />
                            <h6>PROJECT:<p>COVERTRADIE INSURANCE</p></h6>
                        </li>
                        <li>
                            <img className="proimg" src="./whf.png" />
                            <h6>PROJECT:<p>WHF DOORS</p></h6>
                        </li>
                    </ul>
                </div>
                <div className="prorow-5">
                    <ul className="prorow5-items">
                        <li>
                            <img className="proimg" src="./grandband.png" />
                            <h6>PROJECT:<p>THE GRAND BAND</p></h6>
                        </li>
                        <li>
                            <img className="proimg" src="./massi.png" />
                            <h6>PROJECT:<p>MASSI AHMADZAY LAWYER FIRM</p></h6>
                        </li>
                        <li>
                            <img className="proimg" src="./ps4.png" />
                            <h6>PROJECT:<p>PS4X4 ACCESSORIES STORE</p></h6>
                        </li>
                        <li>
                            <img className="proimg" src="./venus.png" />
                            <h6>PROJECT:<p>VENUS VIRGIN TOMARZ</p></h6>
                        </li>
                    </ul>
                </div>
                <div className="prorow-6">
                    <ul className="prorow6-items">
                        <li>
                            <img className="proimg" src="./artis.png" />
                            <h6>PROJECT:<p>THE ARTISANS BOTTEGA</p></h6>
                        </li>
                        <li>
                            <img className="proimg" src="./nbt.png" />
                            <h6>PROJECT:<p>NATURAL BY TARA</p></h6>
                        </li>
                        <li>
                            <img className="proimg" src="./cleanpower.png" />
                            <h6>PROJECT:<p>CLEAN POWER CO</p></h6>
                        </li>
                        <li>
                            <img className="proimg" src="./bdw.png" />
                            <h6>PROJECT:<p>BEAR DOG WALKING SERVICE</p></h6>
                        </li>
                    </ul>
                </div>
                <div className="prorow-7">
                    <ul className="prorow7-items">
                        <li>
                            <img className="proimg" src="./sam.png" />
                            <h6>PROJECT:<p>SAMANTHA WILLIS</p></h6>
                        </li>
                        <li>
                            <img className="proimg" src="./axle.png" />
                            <h6>PROJECT:<p>AXLEFIX</p></h6>
                        </li>
                        <li>
                            <div className="yourpro">
                                <div><h4>YOUR <br/> PROJECT <br/> HERE?</h4></div>
                                <div className='service-btn'>
                                    <Link excat to="/Contact">
                                        <Button className='btn' buttonStyle='btn--white' >Contact Us</Button>
                                    </Link>
                                </div>
                            </div>
                            <h6>PROJECT:<p>YOUR COMPANY</p></h6>
                        </li>
                        {/* <li>
                            <img className="proimg" src="./essentiallybrands.png" />
                            <h6>PROJECT:<p>ESSENTIALLY BRANDS</p></h6>
                        </li> */}
                    </ul>
                </div>
            </div>
            <switch>
                <Route path="/Projects/EssentiallyBrands" component="Projects" />
            </switch>
        </div>
        </Router>
    )
}

export default Project
