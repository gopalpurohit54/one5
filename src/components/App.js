import React from 'react';
import Header from '../components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from '../components/Pages/Home';
import Footer from '../components/Footer';
import About from './Pages/About';
import Projects from './Pages/Projects';
import SoftwareDesign from './Pages/SoftwareDesign';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import EssentiallyBrands from './Pages/EssentiallyBrands';
import LogoDesign from './Pages/LogoDesign';
import WebDesign from './Pages/WebDesign';
import EcomWeb from './Pages/EcomWeb';
import SEO from './Pages/SEO';
import PPC from './Pages/PPC';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact component= {Home} />
        <Route path='/About' exact component= {About} />
        <Route path='/Projects' exact component= {Projects} />
        <Route path='/SoftwareDesign' exact component= {SoftwareDesign} />
        <Route path='/Services' exact component= {Services} />
        <Route path='/Contact' exact component= {Contact} />
        <Route path='/Services/LogoDesign' exact component= {LogoDesign} />
        <Route path='/Services/WebDesign' exact component= {WebDesign} />
        <Route path='/Services/EcomWeb' exact component= {EcomWeb} />
        <Route path='/Services/SEO' exact component= {SEO} />
        <Route path='/Services/PPC' exact component= {PPC} />
        <Route path='/EssentiallyBrands' exact component= {EssentiallyBrands} />
      </Switch>
      <Footer />
    </Router>  
  );
}



export default App
