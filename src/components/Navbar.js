 import React from 'react'
 import { Nav, Navbar,Image } from 'react-bootstrap';
 import '../assets/navbar.css'
 import logo from '../logo.svg'
 
 
function NavBar() {
     return (
         <div id="nav">
            <Navbar  className="text-white" expand="lg">
                <Navbar.Brand href="#home"><Image width="40" src={ logo }/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav  className="text-white">
                    <Nav.Link id="navbar" href="#home">HOME <i className="fa fa-home"></i> </Nav.Link>
                    <Nav.Link id="navbar" href="#link">NEWS</Nav.Link>
                    <Nav.Link id="navbar" href="#link">CONTACT US</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
         </div>
     )
 }
 export default NavBar;