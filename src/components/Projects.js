import React, { useEffect } from "react";
import NavButton from './NavButton.js'
import Footer from "./Footer";
import { Paper } from '@material-ui/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Data } from '../Data'

function Projects() {
    useEffect(() => {
        // scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        AOS.init({ duration: 1000 })
    }, [])

    return (
        <>
            <NavButton />
            <div className="project-container">
                {
                    Data.map((item) => {
                        return (
                            <Paper key={item.name} elevation={5} className="project-card" data-aos='fade-up' >
                                <a href={item.GitUrl} target="_blank" rel="noopener noreferrer">
                                    <img src={item.ImgUrl} alt={item.name} className="project-image" />
                                    <p className="project-name">{item.name}</p>
                                </a>
                            </Paper>
                        )
                    })
                }
            </div>
            <Footer />
        </>
    )
}

export default Projects;