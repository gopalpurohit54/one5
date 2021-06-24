import React from 'react';
import '../App.css';
import  HeroSection from '../HeroSection';
import OurServices from '../OurServices';

function Home() {
    return (
        <Route path="hero-section" component={HeroSection} />
        <Route path="our-services" component={OurServices} />
    )
}

export default Home