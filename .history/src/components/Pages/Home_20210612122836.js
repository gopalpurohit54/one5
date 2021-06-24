import React from 'react';
import '../App.css';
import  HeroSection from '../HeroSection';
import OurServices from '../OurServices';


function Home() {
    return (
        <div className= "Home"> 
            <HeroSection />
            <OurServices />
        </div>
    )
}

export default Home;