import React, { Component } from 'react'
import { InfoConsumer } from '../context'
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import Reviews from '../Reviews'

class Details extends Component {
    render() {
        return (
            <InfoConsumer>
                {data => {
                    const {
                        id,
                        title,
                        headerTitle,
                        headerSubTitle,
                        headerText,
                        img,
                        maps,
                        description
                    } = data.detailInfo;

                    return(
                        <Container  >
                            <Detailheader className="text-center">
                            <h1 className="display-1 font-weight-bold" >{headerTitle}</h1>
                            <h4 className="display-5">{headerSubTitle}</h4>
                            <p>{headerText}</p>
                            {/* Social Icons */}
                            <div className="container mt-5">
                                <div className="row justify-content-center">
                                    <div className="col-2">
                                        <i className="fa fa-facebook-f"/>
                                    </div>
                                    <div className="col-2">
                                        <i className="fa fa-twitter"/>
                                    </div>
                                    <div className="col-2">
                                        <i className="fa fa-instagram"/>
                                    </div>
                                    <div className="col-2">
                                        <i className="fa fa-linkedin"/>
                                    </div>
                                    <div className="col-2">
                                        <i className="fa fa-whatsapp"/>
                                    </div>
                                </div>
                            </div>
                            </Detailheader>

                            {/* Nav Link */}

                            <div className="container">
                                {/* About Place Link */}
                                <ul className="nav nav-tabs">
                                    <li className="nav-item">
                                        <a className="nav-link active " href="#aboutPlace" role="tab" data-toggle="tab">About</a>
                                    </li>
                             

                                {/* Maps*/}
                               
                                    <li className="nav-item">
                                        <a className="nav-link " href="#maps" role="tab" data-toggle="tab">Map</a>
                                    </li>
                      

                                {/* Reviews */}
                                
                                    <li className="nav-item">
                                        <a className="nav-link " href="#reviews" role="tab" data-toggle="tab">Reviews</a>
                                    </li>
                                </ul>
                                {/* Tab Pane */}

                                <div className="tab-content mb-5">
                                    {/* About Place Tab */}
                                    <div className="tab-pane in active text-center mt-5" id="aboutPlace" role='tabpanel'>
                                        <h2 className="mb-3">{title}</h2>
                                        <p>{description}</p>
                                        <img className="img-thumbnail img-fluid" src={img} alt={title}/>
                                    </div>

                                     {/* Map*/}
                                     <div className="tab-pane " id="maps" role='tabpanel' style={{height: '900px'}}>
                                        <iframe src={maps} style={{border: '0', height: '700px',width:'100%',frameborder:"0  "}}></iframe>
                                    </div>

                                    {/* Reviews*/}
                                    <div className="tab-pane " id="reviews"role='tabpanel'>
                                       <Reviews />
                                    </div>
                                </div> 
                            </div>

                        </Container>
                    );
                }}
            </InfoConsumer>
        )
    }
}

export default Details;

const Detailheader = styled.details `
    background: linear-gradient(rgb(109, 109, 109), rgb(255,255,255));
    height: 40vh;
    color: white;

    i{
        color: red;
        font-size: 1.8rem;
    }
    i:hover{
        color: blue;
        cursor: pointer;
    }

`