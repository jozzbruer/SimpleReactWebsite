 import React from 'react'
 import { Nav, Navbar,Image } from 'react-bootstrap';
 import '../../assets/navbar.css'
 import logo from '../../logo.svg'
 //import { Link } from 'react-router-dom';
 
 
function NavBar() {
     return (
         <div id="nav">
            <Navbar  className="text-white" expand="lg">
                <Navbar.Brand href="/"><Image width="40" src={ logo }/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav>
                    <Nav.Link id="navbar" href="/">HOME  &nbsp;<i className="fa fa-home"></i> </Nav.Link>
                    <Nav.Link id="navbar" href="/news">NEWS</Nav.Link>
                    <Nav.Link id="navbar" href="/contact">CONTACT US</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
         </div>
     )
 }
 export default NavBar;
 