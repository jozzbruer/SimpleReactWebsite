import React from 'react';
import { Link } from 'react-router-dom';
import { NavItem, Nav, Navbar, Image } from 'react-bootstrap';
import '../assets/styles/navbar.css';



function NavBar (){
    return(
        <Navbar defaut collapseOnSelect>
            <NavBar.Header>
                <NavBar.Brand>
                    <Link to="/">CodeLive</Link>
                </NavBar.Brand>
                <NavBar.Toggle/>
            </NavBar.Header>
            <NavBar.Collapse>
                <Nav pullright>
                    <NavItem eventKey={1} componentClass={Link} to="/">Home</NavItem>
                    <NavItem eventKey={2} componentClass={Link} to="/about">About</NavItem>
                    <NavItem eventKey={3} componentClass={Link} to="/contact">Contact</NavItem>
                </Nav>
            </NavBar.Collapse>

        </Navbar>
      
    )
}

export default NavBar;
