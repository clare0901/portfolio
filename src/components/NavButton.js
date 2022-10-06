import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavButton() {
    return (
        <>
            <Navbar fixed="top">
                <Container className='home-container'>
                    <Nav className="me-auto">
                        <NavLink className="header-link" exact to="/#">Home</NavLink>
                        <NavLink className="header-link" to="/about" activeStyle={{ color:'#bb4caa' }}>About</NavLink>
                        <NavLink className="header-link" to="/projects" activeStyle={{ color:'#bb4caa' }}>Projects</NavLink>
                        <NavLink className="header-link" to="/work-experience" activeStyle={{ color:'#bb4caa' }}>Experience</NavLink>
                        <a className="header-link" href="https://drive.google.com/file/d/1ybTGiQqSWw16tzhyulp5efhzIFpV-Ngd/view?usp=sharing" target='_blank' rel="noopener noreferrer">My Resume</a>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}
export default NavButton;