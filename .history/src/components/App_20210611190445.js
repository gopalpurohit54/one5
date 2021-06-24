import React from 'react';
import Navbar from '../components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from '../components/Pages/Home';
import { slide as Menu } from 'react-burger-menu';

class Example extends React.Component {
  showSettings (event) {
    event.preventDefault();
    
  }

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component= {Home} />
        <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
      </Switch>
    </Router>
    </>
  );
}



export default App
