import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Picture from '../images/mypic.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'

function About(){
    return(
        <div className="about">
            <h2 className="title">About</h2>
            <Container>
                <Row>
                    <Col className="intro" sm={6}>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac orci at neque ultricies cursus. Praesent ac quam et felis rhoncus consectetur ut vel ex. Ut malesuada ut nulla ultricies commodo. Nam imperdiet magna et augue varius venenatis. Pellentesque et finibus elit, id hendrerit odio. Pellentesque sed nulla turpis. In consequat venenatis dictum. Suspendisse potenti. Donec gravida sed nisl at pulvinar. Aenean dignissim mattis elit vitae gravida. Aenean aliquet blandit accumsan. Donec sagittis eros ut ligula tempor gravida. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                    </Col>
                    <Col className="my-picture-col" sm={6}>
                        <img
                            className="my-picture"
                            width="335px"
                            height="400px"
                            src={Picture}
                            alt="My profile"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About;