import React, { Component } from 'react'
import { InfoConsumer } from './context'
import { Card, Button, Container, Row, Col  } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../App.css'

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
               <div className="col-10 col-lg-4 mx-auto mb-5" >
                    <Card className="card-style" style={{ width: '18rem' }}>
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
               </div>
         )}
        </InfoConsumer>
        )
    }
}
export default Info;