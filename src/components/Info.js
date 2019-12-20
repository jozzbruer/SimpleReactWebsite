import React, { Component } from 'react'
import { InfoConsumer } from './context'
import { Card, Button  } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Info extends Component {
    render() {

    const{
        id,
        header,
        headerTitle,
        headerSubTitle,
        headerText,
        img,
    } = this.props.item;
        return (
            <InfoConsumer>
                {data =>(
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                      <Card.Title>{headerTitle}</Card.Title>
                      <Card.Text>
                        {headerText}
                      </Card.Text>
                        <Link to ='/details'>
                            <Button variant="primary">MORE INFO</Button>
                        </Link>
                    </Card.Body>
                  </Card>
             )}
            </InfoConsumer>
        )
    }
}
export default Info;