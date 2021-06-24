import React from 'react';
import Header from '../components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from '../components/Pages/Home';
import Footer from '../components/Footer';
import About from './Pages/About';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact component= {Home} />
        <Route path='/' exact component= {About} />
      </Switch>
      <Footer />
    </Router>  
  );
}



export default App
