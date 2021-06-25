import React from "react";
import NavButton from './NavButton';
import MajorProjects from './MajorProjects';
import Footer from './Footer';
import '../App.css'

function Home() {
  return (
    <>
      <NavButton />
      <div className="home">
        <div className="main-div">
          <div>
            <p className="name">Hello, <br /> I'm Clare Rebello!</p>
            <span className="intro-line">lorem sks sjnkmmk vsikdvnm vksnvsk vsonvklmsv iosmdkl,cik</span>
          </div>
        </div>
      </div>
      <MajorProjects />
      <Footer />
    </>
  );
};

export default Home;