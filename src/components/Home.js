import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import '../assets/styles/home.css';



function Home (){
    return(
        <Container>
            <Jumbotron>
                <h2>Welcome to Codelive</h2>
                <p>Building a website with react router and react bootstrap</p>
            </Jumbotron>

            <Link to="/About">
                <Button className="primary">About</Button>
            </Link>
        </Container>
      
    )
}

export default Home;
