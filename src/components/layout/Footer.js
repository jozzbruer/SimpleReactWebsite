import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

function Footer() {
    return (
        <FooterContainer>
            <Container fluid className="main-footer">
                <Row>
                    <Col md={3} sm={6}>
                    {/* Col 1 */}
                    <h4>Lorem Limposum</h4>
                    <ul className="list-unstyled">
                        <li><a href="/"> Lorem Limposum</a></li>
                        <li><a href="/"> Lorem Limposum</a></li>
                        <li><a href="/"> Lorem Limposum</a></li> 
                        <li><a href="/"> Lorem Limposum</a></li>
                        <li><a href="/"> Lorem Limposum</a></li>
                    </ul>
                        
                    </Col>

                    <Col md={3} sm={6}>
                    {/* Col 2 */}
                    <h4>Lorem Limposum</h4>
                    <ul className="list-unstyled">
                        <li><a href="/"> Lorem Limposum </a></li>
                        <li><a href="/"> Lorem Limposum </a></li>
                        <li><a href="/"> Lorem Limposum </a></li>
                        <li><a href="/"> Lorem Limposum </a></li>
                        <li><a href="/"> Lorem Limposum </a></li>
                    </ul>
                        
                    </Col>

                    <Col md={3} sm={6}>
                    {/* Col 3 */}
                    <h4>Lorem Limposum</h4>
                    <ul className="list-unstyled">
                        <li><a href="/"> Lorem Limposum </a></li>
                        <li><a href="/"> Lorem Limposum </a></li>
                        <li><a href="/"> Lorem Limposum</a></li>
                        <li><a href="/"> Lorem Limposum</a></li>
                        <li><a href="/"> Lorem Limposum</a></li>
                    </ul>
                    </Col>

                    <Col md={3} sm={6}>
                    {/* Col 1 */}
                    <h4>Lorem Limposum</h4>
                    <ul className="list-unstyled">
                        <li><a href="/"> Lorem Limposum</a></li>
                        <li><a href="/"> Lorem Limposum</a></li>
                        <li><a href="/"> Lorem Limposum</a></li>
                        <li><a href="/"> Lorem Limposum</a></li>
                        <li><a href="/"> Lorem Limposum</a></li>
                    </ul>
                    </Col>
                </Row>
                <p className="text-xs-center">
                <a href="https://www.linkedin.com/in/quince-joz-bruer-4a0488161/" target="_blank">Quince Joz-Bruer </a>
                 &copy; Copyright {new Date().getFullYear()}. All right reserved <br />
                    
                </p>
            </Container>
        </FooterContainer>
    )
}

export default Footer;

const FooterContainer = styled.footer `
    .main-footer {
        background : var(--mainDark);
        color: var(--mainText);
        min-height: 250px;
    }

    ul li a{
        text-decoration: none;
        color: var(--mainText);
    }
`;