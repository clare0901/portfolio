import React from 'react';
import {Grid} from '@material-ui/core';
import {Link} from 'react-router-dom'
import {FaGithub, FaEnvelope, FaLinkedin, FaInstagram} from "react-icons/fa"
import '../App.css'

function Footer() {
    return(
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
                            <Link className="footer-internal-link" to={{pathname:"https://drive.google.com/file/d/1CtiAHqPGLDguRri0JrZg7VMlOjEhesHK/view?usp=sharing"}} target="_blank">My Resume</Link>
                        </li>
                    </ul>
                </Grid>
                <Grid item xs={12} md={5} lg={4} className="grid-item">
                    <ul>
                        <p className="footer-title">Let's Connect</p>
                        <li>Github &minus;
                            <Link className="footer-link" to={{ pathname: 'https://github.com/clare0901' }} target="_blank">
                                https://github.com/clare0901
                            </Link> 
                        </li>

                        <li>LinkedIn &minus;
                            <Link className="footer-link" to={{ pathname: 'https://www.linkedin.com/in/clarerebello-2001/' }} target="_blank">
                                https://www.linkedin.com/in/clarerebello-2001/
                            </Link> 
                        </li>
                        
                        <li>Email &minus;
                            <a className="footer-link">
                                clarerebello0901@gmail.com
                            </a> 
                        </li>
                        
                        <li>Codechef &minus; 
                            <Link className="footer-link" to={{ pathname: 'https://www.codechef.com/users/clare09' }} target="_blank">
                                https://www.codechef.com/users/clare09
                            </Link> 
                        </li>
                        
                        <li>HackerRank &minus;  
                            <Link className="footer-link" to={{ pathname: 'https://www.hackerrank.com/clare2001' }} target="_blank">
                                https://www.hackerrank.com/clare2001
                            </Link> 
                        </li>
                    </ul>
                </Grid>
                
                <Grid item lg={12} className="grid-item">
                    <p className="copyright">&copy; 2021 Copyright Clare Rebello - clarerebello0901@gmail.com</p>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;