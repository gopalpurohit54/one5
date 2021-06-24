import React from 'react';
import '../App.css';
import  HeroSection from '../HeroSection';
import OurServices from '../OurServices';

function Home() {
    return (
        <React.Fragment>
            <HeroSection />
            <OurServices />
        </React.Fragment>
    )
}

export default Home