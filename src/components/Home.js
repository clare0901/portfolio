import React, { useEffect } from "react";
import NavButton from "./NavButton";
import MajorProjects from "./MajorProjects";
import Footer from "./Footer";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiCodechef } from "react-icons/si";
import "../App.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <NavButton />
      <div className="home">
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
              <a href="https://github.com/clare0901">
                <FaGithub className="github" />
              </a>
              <a href="https://www.linkedin.com/in/clarerebello-2001/">
                <FaLinkedinIn className="linkedin" />
              </a>
              <a href="https://www.codechef.com/users/clare09">
                <SiCodechef className="codechef" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <MajorProjects />
      <Footer />
    </>
  );
}

export default Home;
