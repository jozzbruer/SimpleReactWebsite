import React, { Component } from 'react';
import {Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import News from './components/pages/News';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import NotFoundPage from './components/pages/NotFoundPage';
import Details from './components/pages/Details';

class App extends Component{
  render(){
    return(
      <div>
        <Navbar />
         <Switch>
           <Route exact path="/" component={ Home } />
           <Route path="/news" component={ News } />
           <Route path="/contact" component={ Contact } />
           <Route path="/details" component={ Details } />
           <Route component={ NotFoundPage } />
         </Switch>
         <Footer />
      </div>
    );
  }
}
export default App;
