import React from 'react'
import NavButton from './NavButton';
import Skills from './Skills';
import Footer from './Footer';
import { Container, Row, Col } from 'react-bootstrap'
import Picture from '../images/my-pic.jpg'
import { skills } from '../Data'
import { IoSchoolOutline } from "react-icons/io5";
import { GoLocation } from "react-icons/go";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'

function About() {
    return (
        <>
            <div className="about">
                <h2 className="page-title">About</h2>
                <div>
                    <div className="about-card">
                        <Container>
                            <Row>
                                <Col className="my-picture-col" lg={true} >
                                    <img
                                        className="my-picture"
                                        src={Picture}
                                        alt="My profile"
                                    />
                                </Col>
                                <Col className="intro" xs={12} lg={7}>
                                    <p className="about-name">Clare Richard Rebello</p>
                                    <p> <IoSchoolOutline className="organization" /> St. Francis Institute Of Technology</p>
                                    <p> <GoLocation className="location" /> Mumbai, Maharashtra</p>
                                    <p>
                                        A hard-working and highly-organized individual seeking to work with new and emerging
                                        technologies in a challenging and energetic work environment to fully utilize my training and
                                        skills and make a significant contribution to the growth and success of the company. I have
                                        outstanding technical and time management skills.
                                    </p>
                                </Col>
                            </Row>

                            <Row>
                                <Col sm={12}>
                                    <div>
                                        {skills.map((item, key) => {
                                            return (
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
                </div>
            </div>
            <NavButton />
            <Footer />
        </>
    )
}

export default About;