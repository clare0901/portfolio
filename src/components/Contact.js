// import React from 'react';
// import Footer from './Footer';
// import NavButton from './NavButton';
// import {Container, Row, Col} from 'react-bootstrap'
// import {Link} from 'react-router-dom'
// import {IconContext} from "react-icons"
// import {FaGithub, FaEnvelope, FaLinkedin, FaInstagram} from "react-icons/fa"

// function Contact() {
//     return(
//         <>
//             <div className="contact">
//                 <h1 className="page-title">Contact</h1>
//                 <div className="contact-card">
//                     <Container>
//                         <Row>
//                             <Col className="" lg={12} >
//                                 <ul className="contact-list">
//                                     <IconContext.Provider value={{ style: {fontSize: '22px', color: "black", marginTop:"4px", marginRight:"8px"}}}>
                                        
//                                         <Link to={{ pathname: 'https://github.com/clare0901' }} target="_blank" className="links" >
//                                             <li>
//                                                 <FaGithub />
//                                                 Github
//                                             </li>
//                                         </Link> 

//                                         <Link to={{ pathname: "https://www.linkedin.com/in/clarerebello-2001/" }} target="_blank" className="links">
//                                             <li>
//                                                 <FaLinkedin />
//                                                 LinkedIn
//                                             </li>
//                                         </Link>

//                                         <Link to={{ pathname: "https://www.linkedin.com/in/clarerebello-2001/" }} target="_blank" className="links">
//                                             <li>
//                                                 <FaInstagram />
//                                                 Instagram
//                                             </li>
//                                         </Link>

//                                     </IconContext.Provider>
//                                 </ul>
//                             </Col>
//                         </Row>

//                         <Row>
//                             <Col className="" sm={12}>
//                                 <div>
                                
//                                 </div>
//                             </Col>
//                         </Row>
//                     </Container>
//                 </div>
//             </div>
//             <NavButton />
//             <Footer />
//         </>
//     )
// }

// export default Contact;