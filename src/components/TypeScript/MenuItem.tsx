import React from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
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

const colors = ["#F56362","#FED978", "#90CBFB", "#FEA443", "#D9998B"];

const value = ['Home','About', 'Projects', 'Work Experience', 'Contact Me']

export const MenuItem = ({ i }) => {
  const style = { border: `2px solid ${colors[i]}` };
  const text_style = { border: `2px solid ${colors[i]}`};
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="icon-placeholder" style={style} />
      <div className="text-placeholder" style={text_style}>{value[i]}</div>
    </motion.li>
  );
};
