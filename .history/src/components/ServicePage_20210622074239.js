import React, { useState, useEffect } from 'react';
import './ServicePage.css';
import { Button } from './Button';

function ServicePage() {
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
        <div className="servicepage">
        <div className="desc">
            <div className="left-servicedesc">
                <h1><span style={{color: '#F04E31'}} >OUR SERVICES </span></h1>
                <p className="service-desc">We are a full service digital agency so we provide a range of <br/> strategic, creative and technical solutions.</p>
            </div>
        </div>
        <div className="servicepage-wrapper">
            <div className="servicepage-1">
                <div className="s1-desc">
                    <h6>Shree & Samarth</h6>
                    <p>100% biodegradable and sustainably sourced bamboo wipes have been brought to Australian enviroment to 
                        continuous support green environment and running an environmentally friendly business like us helps 
                        reduce impact on the environment.</p>
                    <div className='service-btn'>
                        <a href="#" target="blank">
                            <Button className='btn' buttonStyle='btn--outline'>Learn more</Button>
                        </a>
                    </div>
                </div>
                <div className="s1-img">
                    <a href="#" target="blank">
                        <img className="s1-img" src= "./service1.png" alt= "Loading..." />
                    </a>
                </div>
            </div>
            <div className="servicepage-2">
                <div className="s2-img">
                    <a href="#" target="blank">
                        <img className="s2-img" src= "./service2.png" alt= "Loading..." />
                    </a>
                </div>
                <div className="s2-desc">
                    <h6>Ausport Superstore</h6>
                    <p>Established in a small warehouse in 1964, Ausport SuperStore has grown steadily to become one the largest, 
                        specialist sporting goods retailers in Australia.</p>
                    <div className='service-btn'>
                        <a href="#" target="blank">
                            <Button className='btn' buttonStyle='btn--outline'>Learn more</Button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="servicepage-3">
                <div className="s3-desc">
                    <h6>Tiffany Shen</h6>
                    <p>Miss Tiffany Shen is the proud winner of Miss Australia International 2020. This is a worldwide movement that recognizes and 
                        celebrates women whose voices strive to make a difference.</p>
                    <div className='service-btn'>
                        <a href="#" target="blank">
                            <Button className='btn' buttonStyle='btn--outline'>Learn more</Button>
                        </a>
                    </div>
                </div>
                <div className="s3-img">
                    <a href="#" target="blank">
                        <img className="s3-img" src= "./service3.png" alt= "Loading..." />
                    </a>
                </div>
            </div>
            <div className="servicepage-4">
                <div className="s4-img">
                    <a href="#" target="blank">
                        <img className="s4-img" src= "./service4.png" alt= "Loading..." />
                    </a>
                </div>
                <div className="s4-desc">
                    <h6>Essentially Brands</h6>
                    <p>We will help you to organise and manage all your sales, stock, accounting, shipping and 
                        customer data from single place.</p>
                    <div className='service-btn'>
                        <a href="#" target="blank">
                            <Button className='btn' buttonStyle='btn--outline'>Learn more</Button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="servicepage-5">
                <div className="s5-desc">
                    <h6>Staged Homes</h6>
                    <p>Melissa helps to maximize your home’s sales potential and minimize your time on the market by transforming spaces at minimal expence, 
                        to amaze prospective buyers with a lasting first impression.</p>
                    <div className='service-btn'>
                        <a href="#" target="blank">
                            <Button className='btn' buttonStyle='btn--outline'>Learn more</Button>
                        </a>
                    </div>
                </div>
                <div className="s5-img">
                    <a href="#" target="blank">
                        <img className="s5-img" src= "./service5.png" alt= "Loading..." />
                    </a>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ServicePage;
