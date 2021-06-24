import React from 'react';
import '../App.css';
import  AboutPage from '../AboutPage';
import Approach from '../Approach';
import Expertize from '../Expertize';

function About() {
    return (
        <React.Fragment> 
            <AboutPage />
            <Approach />
            <Expertize />
        </React.Fragment>
    )
}

export default About;