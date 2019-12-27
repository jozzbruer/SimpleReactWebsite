 import React from 'react'
 import { Nav, Navbar,Image } from 'react-bootstrap';
 import '../../assets/navbar.css'
 import logo from '../../logo.svg'
 import { Link } from 'react-router-dom';
 
 
function NavBar() {
     return (
         <div id="nav">
            <Navbar  className="text-white" expand="lg">
                <Navbar.Brand href="/"><Image width="40" src={ logo }/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav>
                    <Link id="navbar" to="/">HOME  &nbsp;<i className="fa fa-home"></i> </Link>
                
                    <Link id="navbar" to="/news">NEWS</Link>
                 
                    <Link id="navbar" to="/contact">CONTACT US</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
         </div>
     )
 }
 export default NavBar;
 