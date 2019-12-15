import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navigationbar from './components/CustomNavBar';
function App() {
  return (
    
   <div>
    <Navigationbar/>
     <Router>
        <Route exact path="/" component={ Home } ></Route>
        <Route  path="/About" component={ About } ></Route>
        <Route  path="/Contact" component={ Contact } ></Route>
     </Router>
   </div>
  );
}

export default App;
