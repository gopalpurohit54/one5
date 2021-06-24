import React from 'react';
import '../App.css';
import  HeroSection from '../HeroSection';
import OurProjects from '../OurProjects';
import OurServices from '../OurServices';


function Home() {
    return (
        <React.Fragment> 
            <HeroSection />
            <OurServices />
            <OurProjects />
        </React.Fragment>
    )
}

export default Home;