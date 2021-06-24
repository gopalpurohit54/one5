import React from 'react';
import '../App.css';
import  AboutPage from '../AboutPage';
import Approach from '../Approach';
import Expertize from '../Expertize';
import Portfolio from '../Portfolio';
import Testimonials from '../Testimonials';
import Getintouch from '../Getintouch';

function About() {
    return (
        <React.Fragment> 
            <AboutPage />
            <Expertize />
            <Approach />
            <Portfolio />
            <Testimonials />
            <Getintouch />
        </React.Fragment>
    )
}

export default About;