import React from 'react';
import '../App.css';
import  AboutPage from '../AboutPage';
import Approach from '../Approach';
import Expertize from '../Expertize';
import Portfolio from '../Portfolio';
import Testimonials from '../Testimonials';
import Contact from '../Contact';

function About() {
    return (
        <React.Fragment> 
            <AboutPage />
            <Expertize />
            <Approach />
            <Portfolio />
            <Testimonials />
            <Contact />
        </React.Fragment>
    )
}

export default About;