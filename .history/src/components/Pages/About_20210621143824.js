import React from 'react';
import '../App.css';
import  AboutPage from '../AboutPage';
import Approach from '../Approach';
import Expertize from '../Expertize';
import Portfolio from '../Portfolio';

function About() {
    return (
        <React.Fragment> 
            <AboutPage />
            <Expertize />
            <Approach />
            <Portfolio />
        </React.Fragment>
    )
}

export default About;