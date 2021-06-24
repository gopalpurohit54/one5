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
                    <h6>LOGO DESIGN</h6>
                    <p>We craft meaningful brands through visual identity, print and digital experience <br/>
                     for small to medium business all ove the world</p>
                    <div className='project-btn'>
                        <a href="https://snsbabycare.com.au/" target="blank">
                            <Button className='btn' buttonStyle='btn--white' >View Project</Button>
                        </a>
                    </div>
                </div>
                <div className="s1-img">
                    <a href="https://snsbabycare.com.au/" target="blank">
                        <img src= "./service1.png" alt= "Loading..." />
                    </a>
                </div>
            </div>
            <div className="servicepage-2">
                <div className="s2-img">
                    <a href="https://ausport-new.myshopify.com/" target="blank">
                        <img src= "./service2.png" alt= "Loading..." />
                    </a>
                </div>
                <div className="p2-desc">
                    <h6>Ausport Superstore</h6>
                    <p>When we build you a website, not only are we responsible for you a modern ,<br/>
                     updated design, we are responsible for making that website a sales tool for <br/>
                     your business.</p>
                    <div className='project-btn'>
                        <a href="https://ausport-new.myshopify.com/" target="blank">
                            <Button className='btn' buttonStyle='btn--white' >View Project</Button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="project-3">
                <div className="p3-desc">
                    <h6>Tiffany Shen</h6>
                    <p>Miss Tiffany Shen is the proud winner of Miss Australia International 2020. This is a worldwide movement that recognizes and 
                        celebrates women whose voices strive to make a difference.</p>
                    <div className='project-btn'>
                        <a href="https://misstiffanyshen.com/" target="blank">
                            <Button className='btn' buttonStyle='btn--white' >View Project</Button>
                        </a>
                    </div>
                </div>
                <div className="p3-img">
                    <a href="https://misstiffanyshen.com/" target="blank">
                        <img src= "./tiffany.png" alt= "Loading..." />
                    </a>
                </div>
            </div>
            <div className="project-4">
                <div className="p4-img">
                    <a href="https://essentiallybrands.com/" target="blank">
                        <img src= "./essentially-brands.png" alt= "Loading..." />
                    </a>
                </div>
                <div className="p4-desc">
                    <h6>Essentially Brands</h6>
                    <p>We will help you to organise and manage all your sales, stock, accounting, shipping and 
                        customer data from single place.</p>
                    <div className='project-btn'>
                        <a href="https://essentiallybrands.com/" target="blank">
                            <Button className='btn' buttonStyle='btn--white' >View Project</Button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="project-5">
                <div className="p5-desc">
                    <h6>Staged Homes</h6>
                    <p>Melissa helps to maximize your home’s sales potential and minimize your time on the market by transforming spaces at minimal expence, 
                        to amaze prospective buyers with a lasting first impression.</p>
                    <div className='project-btn'>
                        <a href="https://stagedhomesbymelissa.com/" target="blank">
                            <Button className='btn' buttonStyle='btn--white' >View Project</Button>
                        </a>
                    </div>
                </div>
                <div className="p5-img">
                    <a href="https://stagedhomesbymelissa.com/" target="blank">
                        <img src= "./staged-homes.png" alt= "Loading..."/>
                    </a>
                </div>
            </div>
            {/* <div className="servicepage-1">
                <div className="s1-desc">
                    <h6>LOGO DESIGN</h6>
                    <p>We craft meaningful brands through visual identity, print and digital experience <br/>
                     for small to medium business all ove the world</p>
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
            </div> */}
            {/* <div className="servicepage-2">
                <div className="s2-img">
                    <a href="#" target="blank">
                        <img className="s2-img" src= "./service2.png" alt= "Loading..." />
                    </a>
                </div>
                <div className="s2-desc">
                    <h6>WEBSITE DESIGN</h6>
                    <p>When we build you a website, not only are we responsible for you a modern ,<br/>
                     updated design, we are responsible for making that website a sales tool for <br/>
                     your business. </p>
                    <div className='service-btn'>
                        <a href="#" target="blank">
                            <Button className='btn' buttonStyle='btn--outline'>Learn more</Button>
                        </a>
                    </div>
                </div>
            </div> */}
            {/* <div className="servicepage-3">
                <div className="s3-desc">
                    <h6>E-COMMERCE WEBSITE</h6>
                    <p>We work with you to understand your business, your competitors and most<br/>
                     importantly your customers.</p>
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
            </div> */}
            {/* <div className="servicepage-4">
                <div className="s4-img">
                    <a href="#" target="blank">
                        <img className="s4-img" src= "./service4.png" alt= "Loading..." />
                    </a>
                </div>
                <div className="s4-desc">
                    <h6>SEARCH ENGINE OPTIMIZATION(SEO)</h6>
                    <p>The organic SEO is the best approach to any company looking for a long term <br/>
                    investment with fruitful return.</p>
                    <div className='service-btn'>
                        <a href="#" target="blank">
                            <Button className='btn' buttonStyle='btn--outline'>Learn more</Button>
                        </a>
                    </div>
                </div>
            </div> */}
            {/* <div className="servicepage-5">
                <div className="s5-desc">
                    <h6>PAY PER CLICK(PPC)</h6>
                    <p>One 5 digital can tailor a Paid Search Campaign that targets<br/>
                     the buyer your are looking for.</p>
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
            </div> */}
            </div>
        </div>
    )
}

export default ServicePage;
