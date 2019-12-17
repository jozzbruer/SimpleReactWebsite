import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

class App extends Component{
  render(){
    return(
      <div>
        <Navbar />
         <h1>Hello World</h1>
         <Footer />
      </div>
    );
  }
}
export default App;
