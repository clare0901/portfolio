import React, { useRef }  from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./TypeScript/use-dimensions";
import { MenuToggle } from "./TypeScript/MenuToggle";
import { Navigation } from "./TypeScript/Navigation";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 260px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

function Home() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <>
        <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
        >
        <motion.div className="background" variants={sidebar} />
        <Navigation />
        <MenuToggle toggle={() => toggleOpen()} />
        </motion.nav>

        <div className="home">
            <div className="main-div">
                <div>
                    <p className="name">Hello, I'm Clare Rebello!</p>
                    <span className="intro-line">lorem sks sjnkmmk vsikdvnm vksnvsk vsonvklmsv iosmdkl,cik</span>    
                </div> 
            </div>
        </div>
    </>
  );
};

export default Home;