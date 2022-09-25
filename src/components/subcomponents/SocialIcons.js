import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { Github, Instagram, Linkedin, Twitter } from "../AllSvgs";

const Bar = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  & > * {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;
const pop = {
  hidden: {
    scale: -1,
    opacity: 0.5,
  },
  show: {
    opacity: 1,
    scale: [0, 1],
    transition: {
      duration: 0.5,
      delay: 0.5,
    },
  },
};
const scale = {
  hidden: {
    scale: 1,
  },
  show: {
    scale: 1.2,
    transition: {
      duration: 0.5,
    },
  },
};
const SocialIcons = () => {
  return (
    <Bar
      animate={{
        transition: {
          staggerChildren: 0.5,
        },
      }}
    >
      <motion.div
        variants={pop}
        initial='hidden'
        whileHover={scale.show}
        animate='show'
      >
        <Github />
      </motion.div>
      <motion.div
        variants={pop}
        initial='hidden'
        animate='show'
        whileHover={scale.show}
      >
        <Linkedin />
      </motion.div>
      <motion.div
        variants={pop}
        initial='hidden'
        animate='show'
        whileHover={scale.show}
      >
        <Twitter />
      </motion.div>
      <motion.div
        variants={pop}
        initial='hidden'
        animate='show'
        whileHover={scale.show}
      >
        <Instagram />
      </motion.div>
    </Bar>
  );
};

export default SocialIcons;
