import React, { Component } from 'react'
import { InfoConsumer } from '../context'
import { Container, Row, Col } from 'react-bootstrap'
import Info from '../Info'
import '../../App.css'


class Home extends Component {
    render() {
        return (
            <Container >
                <Row className="row mt-5">
                        <InfoConsumer className="card-style">
                            {data => {
                                return data.info.map(item =>{
                                    return <Info key={item.id} item={item} />;
                                })
                            }}
                        </InfoConsumer>
                </Row>
                <br/>
            </Container>
        )
    }
}

export default Home;
