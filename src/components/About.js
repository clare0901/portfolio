import React from 'react'
import NavButton from './NavButton';
import Skills from './Skills';
import Footer from './Footer';
import {Container, Row, Col} from 'react-bootstrap'
import Picture from '../images/mypic.jpg'
import { Paper } from '@material-ui/core';
import {skills} from '../Data'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'

function About(){
    return(
        <>
            <Paper className="about"  elevation={10}>
                <div className="about-card">
                    <h2 className="title">About</h2>
                    <Container>
                        <Row>
                            <Col className="my-picture-col" lg={true} >
                                <img
                                    className="my-picture"
                                    src={Picture}
                                    alt="My profile"
                                />
                            </Col>
                            <Col className="intro" lg={7} >
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac orci at neque ultricies cursus. Praesent ac quam et felis rhoncus consectetur ut vel ex. Ut malesuada ut nulla ultricies commodo. Nam imperdiet magna et augue varius venenatis. Pellentesque et finibus elit, id hendrerit odio. Pellentesque sed nulla turpis. In consequat venenatis dictum. Suspendisse potenti. Donec gravida sed nisl at pulvinar. Aenean dignissim mattis elit vitae gravida. Aenean aliquet blandit accumsan. Donec sagittis eros ut ligula tempor gravida. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col className="" sm={12}>
                                <div>
                                { skills.map((item,key) => {
                                    // console.log("key",key)
                                    return( 
                                        <>
                                            <h5 className="skills-title">{item.name}</h5>
                                            <Skills value={item.value} key={item.name} />
                                        </>
                                    )
                                })}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Paper>
            <NavButton />
            <Footer />
        </>
    )
}

export default About;