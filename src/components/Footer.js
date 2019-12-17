import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
    return (
        <div className="main-footer">
            <Container>
                <Row>
                    <Col md={3} sm={6}>
                    {/* Col 1 */}
                    <h4>Lorem Limposum</h4>
                    <ul className="list-unstyled">
                        <li>Lorem Limposum</li>
                        <li>Lorem Limposum</li>
                        <li>Lorem Limposum</li>
                        <li>Lorem Limposum</li>
                        <li>Lorem Limposum</li>
                    </ul>
                        
                    </Col>

                    <Col md={3} sm={6}>
                    {/* Col 2 */}
                    <h4>Lorem Limposum</h4>
                    <ul className="list-unstyled">
                        <li>Lorem Limposum</li>
                        <li>Lorem Limposum</li>
                        <li>Lorem Limposum</li>
                        <li>Lorem Limposum</li>
                        <li>Lorem Limposum</li>
                    </ul>
                        
                    </Col>

                    <Col md={3} sm={6}>
                    {/* Col 3 */}
                    <h4>Lorem Limposum</h4>
                    <ul className="list-unstyled">
                        <li>Lorem Limposum</li>
                        <li>Lorem Limposum</li>
                        <li>Lorem Limposum</li>
                        <li>Lorem Limposum</li>
                        <li>Lorem Limposum</li>
                    </ul>
                    </Col>

                    <Col md={3} sm={6}>
                    {/* Col 1 */}
                    <h4>Lorem Limposum</h4>
                    <ul className="list-unstyled">
                        <li>Lorem Limposum</li>
                        <li>Lorem Limposum</li>
                        <li>Lorem Limposum</li>
                        <li>Lorem Limposum</li>
                        <li>Lorem Limposum</li>
                    </ul>
                    </Col>
                </Row>
                <p className="text-xs-center">
                    &copy; Copyright {new Date().getFullYear()}. All right reserved
                </p>
            </Container>
        </div>
    )
}

export default Footer;
