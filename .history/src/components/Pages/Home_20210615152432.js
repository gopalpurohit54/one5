import React from 'react';
import '../App.css';
import  HeroSection from '../HeroSection';
import OurProjects from '../OurProjects';
import OurServices from '../OurServices';
import AboutUs from '../AboutUs';

function Home() {
    return (
        <React.Fragment> 
            <HeroSection />
            <OurServices />
            <OurProjects />
            <AboutUs />
        </React.Fragment>
    )
}

export default Home;