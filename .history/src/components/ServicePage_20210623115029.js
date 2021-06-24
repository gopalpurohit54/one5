import React, { useState, useEffect } from 'react';
import './ServicePage.css';
import { Button } from './Button';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';

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
        <Router>
        <div className="servicepage-wrapper">
            <div className="servicepage-1">
                <div className="s1-desc">
                    <h6>LOGO DESIGN</h6>
                    <p>We craft meaningful brands through visual identity, print and digital experience <br/>
                     for small to medium business all ove the world</p>
                    <div className='service-btn'>
                        <Link exact to={`/Services/LogoDesign`}>
                            <Button className='btn' buttonStyle='btn--outline'>Learn more</Button>
                        </Link>
                    </div>
                </div>
                <div className="s1-img">
                    <Link exact to={`/Services/LogoDesign`}>
                        <img  src= "./service1.png" alt= "Loading..." />
                    </Link>
                </div>
            </div>
            <div className="servicepage-2">
                <div className="s2-img">
                    <Link exact to={`/Services/WebDesign`}>
                        <img src= "./service2.png" alt= "Loading..." />
                    </Link>
                </div>
                <div className="s2-desc">
                    <h6>WEBSITE DESIGN</h6>
                    <p>When we build you a website, not only are we responsible for you a modern ,<br/>
                     updated design, we are responsible for making that website a sales tool for <br/>
                     your business. </p>
                    <div className='service-btn'>
                        <Link exact to={`/Services/WebDesign`}>
                            <Button className='btn' buttonStyle='btn--outline'>Learn more</Button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="servicepage-3">
                <div className="s3-desc">
                    <h6>E-COMMERCE WEBSITE</h6>
                    <p>We work with you to understand your business, your competitors and most<br/>
                     importantly your customers.</p>
                    <div className='service-btn'>
                        <Link exact to={`/Services/EcomWeb`}>
                            <Button className='btn' buttonStyle='btn--outline'>Learn more</Button>
                        </Link>
                    </div>
                </div>
                <div className="s3-img">
                    <Link exact to={`/Services/EcomWeb`}>
                        <img src= "./service3.png" alt= "Loading..." />
                    </Link>
                </div>
            </div>
            <div className="servicepage-4">
                <div className="s4-img">
                    <Link exact to={`/Services/SEO`}>
                        <img  src= "./service4.png" alt= "Loading..." />
                    </Link>
                </div>
                <div className="s4-desc">
                    <h6>SEARCH ENGINE OPTIMIZATION(SEO)</h6>
                    <p>The organic SEO is the best approach to any company looking for a long term <br/>
                    investment with fruitful return.</p>
                    <div className='service-btn'>
                        <Link exact to={`/Services/SEO`}>
                            <Button className='btn' buttonStyle='btn--outline'>Learn more</Button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="servicepage-5">
                <div className="s5-desc">
                    <h6>PAY PER CLICK(PPC)</h6>
                    <p>One 5 digital can tailor a Paid Search Campaign that targets<br/>
                     the buyer your are looking for.</p>
                    <div className='service-btn'>
                        <Link exact to={`/Services/PPC`}>
                            <Button className='btn' buttonStyle='btn--outline'>Learn more</Button>
                        </Link>
                    </div>
                </div>
                <div className="s5-img">
                    <Link exact to={`/Services/PPC`}>
                        <img src= "./service5.png" alt= "Loading..." />
                    </Link>
                </div>
            </div>
            <Switch>
                <Route exact path="/Services/LogoDesign" component={LogoDesign} />
                <Route exact path="/users" component={Users} />
                <Route path="/contact" component={Contact} />
                <Route component={Notfound} />
            </Switch>
            </div>
            </Router>
        </div>
    )
}

export default ServicePage;
