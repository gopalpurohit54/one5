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
        <Route path='/' exact component= {Home} />
        <Route path='/' exact component= {About} />
        <Route path='/' exact component= {Projects} />
        <Route path='/' exact component= {SoftwareDesign} />
        <Route path='/' exact component= {Services} />
        <Route path='/' exact component= {Contact} />
      </Switch>
      <Footer />
    </Router>  
  );
}



export default App
