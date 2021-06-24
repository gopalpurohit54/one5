import React from 'react';
import '../App.css';
import ServicePage from '../ServicePage';
import Getintouch from '../Getintouch';
import LogoDesign from './components/Pages/LogoDesign';

function Services() {
    return (
        <React.Fragment> 
            <ServicePage />
            <Getintouch />
        </React.Fragment>
    )
}

export default Services;
