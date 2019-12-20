import React, { Component } from 'react'
import { InfoConsumer } from '../context'
import { Container, Row, Col } from 'react-bootstrap'
import Info from '../Info'


class Home extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col lg={6}>
                        <InfoConsumer>
                            {data => {
                                return data.info.map(item =>{
                                    return <Info key={item.id} item={item} />;
                                })
                            }}
                        </InfoConsumer>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home;
