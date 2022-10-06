import React from 'react';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom'
import '../App.css'
import { FaAngleUp } from "react-icons/fa";

function Footer() {
    return (
        <>
            <Grid className="grid" container direction="row" justify="center" >
                <Grid item xs={12} md={4} lg={4} className="grid-item">
                    <ul>
                        <p className="footer-title">Navigation</p>
                        <li>
                            <Link className="footer-internal-link" to="/">Home</Link>
                        </li>
                        <li>
                            <Link className="footer-internal-link" to="/about">About</Link>
                        </li>
                        <li>
                            <Link className="footer-internal-link" to="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link className="footer-internal-link" to="/work-experience">Work Experience</Link>
                        </li>
                        <li>
                            <a href="https://drive.google.com/file/d/1ybTGiQqSWw16tzhyulp5efhzIFpV-Ngd/view?usp=sharing" rel="noopener noreferrer" className="footer-internal-link" target="_blank">My Resume</a>
                        </li>
                    </ul>
                </Grid>
                <Grid item xs={12} md={5} lg={4} className="grid-item">
                    <ul>
                        <p className="footer-title">Let's Connect</p>
                        <li>Github &minus;
                            <a href="https://github.com/clare0901" className="footer-link" target="_blank" rel="noopener noreferrer">
                                https://github.com/clare0901
                            </a>
                        </li>

                        <li>LinkedIn &minus;
                            <a href="https://www.linkedin.com/in/clarerebello09/" className="footer-link" target="_blank" rel="noopener noreferrer">
                                https://www.linkedin.com/in/clarerebello09/
                            </a>
                        </li>

                        <li>Email &minus;
                            <button className="footer-link" onClick={() => window.location = 'mailto:clarerebello0901@gmail'}> clarerebello0901@gmail.com </button>
                        </li>

                        <li>Codechef &minus;
                            <a href="https://www.codechef.com/users/clare09" className="footer-link" target="_blank" rel="noopener noreferrer">
                                https://www.codechef.com/users/clare09
                            </a>
                        </li>

                        <li>HackerRank &minus;
                            <a href="https://www.hackerrank.com/clare2001'" className="footer-link" target="_blank" rel="noopener noreferrer">
                                https://www.hackerrank.com/clare2001
                            </a>
                        </li>
                    </ul>
                </Grid>

                <Grid item lg={12} className="grid-item">
                    <p className="copyright">&copy; 2021 Copyright Clare Rebello - clarerebello0901@gmail.com</p>

                    <FaAngleUp className='scrollButton' onClick={() => {
                        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                    }} />
                </Grid>

            </Grid>
        </>
    )
}

export default Footer;