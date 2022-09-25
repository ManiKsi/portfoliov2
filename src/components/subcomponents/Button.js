import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
const Btn = styled(motion.button)`
  width: 50%;
  height: 45px;
  border-radius: 5px;
  font-weight: 400;
  color: ${(props) => (props.theme === "light" ? "#333" : "#fff")} !important;
  background-color: ${(props) => (props.theme === "light" ? "#fff" : "#333")};
  border: 1px solid #333;
  font-size: 1rem;
  cursor: pointer;
`;
const Button = (props) => {
  return (
    <Btn
      initial={{ opacity: 0.6, scale: 0.8 }}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.9 }}
      animate={{
        scale: 1,
        opacity: 1,
        transition: { duration: 0.5 },
      }}
      theme={props.theme}
    >
      {props.children}
    </Btn>
  );
};

export default Button;
