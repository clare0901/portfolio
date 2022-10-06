import React, { useEffect } from "react";
import NavButton from "./NavButton";
import { FaGithub, FaLinkedinIn, FaHackerrank } from "react-icons/fa";
import "../App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import videoBG from '../assets/videoBG.mp4'


function Home() {

  let GitUrl = "https://github.com/clare0901";
  let HackerrankUrl = "https://www.linkedin.com/in/clarerebello09/";
  let LinkedINUrl = "https://www.hackerrank.com/clare2001";

  useEffect(() => {
    // scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    // animation
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <NavButton />
      <div className="home">
        <div className="overlay"></div>
        <video src={videoBG} autoPlay loop muted />
        <div className="main-div">
          <div>
            <p
              className="name"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              Hello, <br /> I'm Clare Rebello!
            </p>
            <p
              className="intro-line"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0"
            >
              A Computer Engineer <br /> I believe in <strong>"</strong>Where
              there is a will, there is a way<strong>"</strong>
            </p>
          </div>

          <div className="home-page-icons-div">
            <div className="home-page-icons" data-aos="flip-down">
              <a href={GitUrl} target="_blank" rel="noopener noreferrer" >
                <FaGithub className="github" />
              </a>
              <a href={LinkedINUrl} target="_blank" rel="noopener noreferrer" >
                <FaLinkedinIn className="linkedin" />
              </a>
              <a href={HackerrankUrl} target="_blank" rel="noopener noreferrer" >
                <FaHackerrank className="hackerrank" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
