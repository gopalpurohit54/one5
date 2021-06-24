import React from 'react';
import '../App.css';
import  HeroSection from '../HeroSection';
import OurProjects from '../OurProjects';
import OurServices from '../OurServices';
import AboutUs from '../AboutUs';
import RequestQuote from '../RequestQuote';

function Home() {
    return (
        <React.Fragment> 
            <HeroSection />
            <OurServices />
            <OurProjects />
            <AboutUs />
            <RequestQuote />
        </React.Fragment>
    )
}

export default Home;