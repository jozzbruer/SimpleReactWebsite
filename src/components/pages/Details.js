import React, { Component } from 'react'
import { InfoConsumer } from '../context'
import { Container } from 'react-bootstrap';

class Details extends Component {
    render() {
        return (
            <InfoConsumer>
                {data => {
                    const {
                        id,
                        headerTitle,
                        headerSubTitle,
                        headerText,
                        img,
                        maps,
                        description
                    } = data.detailInfo;

                    return(
                        <Container>
                            <h1>{headerTitle}</h1>
                        </Container>
                    );
                }}
            </InfoConsumer>
        )
    }
}

export default Details;
