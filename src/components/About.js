import React, { useEffect } from 'react'
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

    useEffect(() => {
        // scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <>
            <NavButton />
            <div className="about">
                <div className="about-card">
                    <Container className='about-container'>
                        <Row>
                            <Col className="my-picture-col" lg={5} >
                                <img
                                    className="my-picture"
                                    src={Picture}
                                    alt="My profile"
                                />
                            </Col>
                            <Col className="intro" xs={12} lg={7}>
                                <p className="about-name">Clare Richard Rebello</p>
                                <p> <IoSchoolOutline className="organization" /> Graduated from University of Mumbai</p>
                                <p> <GoLocation className="location" /> Mumbai, Maharashtra</p>
                                <p>
                                    A hard-working and highly-organized individual seeking to work with new and emerging
                                    technologies in a challenging and energetic work environment to fully utilize my training and
                                    skills and make a significant contribution to the growth and success of the company.
                                    <br /> I have outstanding technical and time management skills.
                                </p>
                            </Col>
                            <Col sm={12}>
                                <div>
                                    {skills.map((item) => {
                                        return (
                                            <div key={item.name}>
                                                <h5 className="skills-title">{item.name}</h5>
                                                <Skills value={item.value} />
                                            </div>
                                        )
                                    })}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About;