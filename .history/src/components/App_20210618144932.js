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

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/Home' exact component= {Home} />
        <Route path='/About' exact component= {About} />
        <Route path='/Projects' exact component= {Projects} />
        <Route path='/SoftwareDesign' exact component= {SoftwareDesign} />
        <Route path='/Services' exact component= {Services} />
        <Route path='/Contact' exact component= {Contact} />
      </Switch>
      <Footer />
    </Router>  
  );
}



export default App
