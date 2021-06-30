import React from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    display: "relative",
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const colors = ["#F56362", "#FED978", "#90CBFB", "#FEA443", "#D9998B"];

const value = ['Home', 'About', 'Projects', 'Work Experience', 'My Resume']

const links = ['/', '/about', '/projects', '/work-experience']

// const target = ['_self', '_self', '_self', '_self', '_blank']

export const MenuItem = ({ i }) => {
  const style = { border: `2px solid ${colors[i]}` };
  const text_style = { border: `2px solid ${colors[i]}` };

  return (
    i!==4 ?
    <Link to={links[i]} style={{ textDecoration: "none" }}>
      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="icon-placeholder" style={style} />
        <div className="text-placeholder" style={text_style}>{value[i]}</div>
      </motion.li>
    </Link> :
    <a href="https://drive.google.com/file/d/1uRtQN5RgmhCV1cwbHTv773Ec2m7Vmzw8/view?usp=sharing" rel="noopener noreferrer" target="_blank" style={{ textDecoration: "none" }}>
      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="icon-placeholder" style={style} />
        <div className="text-placeholder" style={text_style}>{value[i]}</div>
      </motion.li>
    </a>

  );
};

