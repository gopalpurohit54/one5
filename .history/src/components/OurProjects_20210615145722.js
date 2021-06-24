import React, { useState, useEffect } from 'react';
import './OurProjects.css';
import { Button } from './Button';

function OurProjects() {
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

    return(
    <div className="our-projects">
        <div className="desc">
            <p className = 'project-shortdesc' style={{ color: '#F04E31' }}>───── OUR SERVICES</p>
            <div className="left-desc">
                <h1>WE BUILD SOLUTIONS<br/> 
                WITH <span style={{color: '#F04E31'}} >CREATIVE </span> DESIGN</h1>
            </div>
            <div className="right-desc">
                <p className="project-desc">Client success is measured by result.<br/> We have the great team to make <br/> an outstanding results.</p>
            </div>
        </div>
        <div className="project-wrapper">
            <div className="project-1">
                <div className="p1-desc">
                    <h6>Shree & Samarth</h6>
                    <p>100% biodegradable and sustainably sourced bamboo wipes have been brought to Australian enviroment to 
                        continuous support green environment and running an environmentally friendly business like us helps 
                        reduce impact on the environment.</p>
                    <div className='service-btn'>
                        <Button className='btn' buttonStyle='btn--white'>View Project</Button>
                    </div>
                </div>
                <div className="p1-img">
                    <img src= "./sns.png" alt= "Loading..." to="https://github.com/Joeyryanbridges" />
                </div>
            </div>
            <div className="project-2">
                <div className="p2-img">
                    <img src= "./ausport.png" alt= "Loading..."  to="https://ausport-new.myshopify.com/"/>
                </div>
                <div className="p2-desc">
                    <h6>Ausport Superstore</h6>
                    <p>Established in a small warehouse in 1964, Ausport SuperStore has grown steadily to become one the largest, 
                        specialist sporting goods retailers in Australia.</p>
                    <div className='service-btn'>
                        <Button className='btn' buttonStyle='btn--white'>View Project</Button>
                    </div>
                </div>
            </div>
            <div className="project-3">
                <div className="p3-desc">
                    <h6>Tiffany Shen</h6>
                    <p>Miss Tiffany Shen is the proud winner of Miss Australia International 2020. This is a worldwide movement that recognizes and 
                        celebrates women whose voices strive to make a difference.</p>
                    <div className='service-btn'>
                        <Button className='btn' buttonStyle='btn--white'>View Project</Button>
                    </div>
                </div>
                <div className="p3-img">
                    <img src= "./tiffany.png" alt= "Loading..." to="https://misstiffanyshen.com/" />
                </div>
            </div>
            <div className="project-4">
                <div className="p4-img">
                    <img src= "./essentially-brands.png" alt= "Loading..." to="https://essentiallybrands.com/" />
                </div>
                <div className="p4-desc">
                    <h6>Essentially Brands</h6>
                    <p>We will help you to organise and manage all your sales, stock, accounting, shipping and 
                        customer data from single place.</p>
                    <div className='service-btn'>
                        <Button className='btn' buttonStyle='btn--white'>View Project</Button>
                    </div>
                </div>
            </div>
            <div className="project-5">
                <div className="p5-desc">
                    <h6>Staged Homes</h6>
                    <p>Melissa helps to maximize your home’s sales potential and minimize your time on the market by transforming spaces at minimal expence, 
                        to amaze prospective buyers with a lasting first impression.</p>
                    <div className='service-btn'>
                        <Button className='btn' buttonStyle='btn--white'>View Project</Button>
                    </div>
                </div>
                <div className="p5-img">
                    <img src= "./staged-homes.png" alt= "Loading..." to="https://stagedhomesbymelissa.com/" />
                </div>
            </div>
            <div className="project-6">
                <div className="p6-img">
                    <img src= "./accord-retail.png" alt= "Loading..." to="https://accordretail.com.au/" />
                </div>
                <div className="p6-desc">
                    <h6>Accord Retail</h6>
                    <p>Accord Retail Leasing is a boutique sized commercial real estate agency which offers specialised service in retail planning, budgeting and 
                        leasing for your retail portfolio or development.</p>
                    <div className='service-btn'>
                        <Button className='btn' buttonStyle='btn--white'>View Project</Button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default OurProjects;