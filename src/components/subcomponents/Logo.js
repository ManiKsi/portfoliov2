import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/images/1x/Asset 1.png";
const Img = styled(motion.img)`
  width: calc(6rem + 4vw);
  height: auto;
`;
const Logo = () => {
  return (
    <Link to='/' style={{ display: "flex", flexDirection: "column" }}>
      <Img
        animate={{
          x: [-10, 0],
          transition: {
            duration: 1,
          },
        }}
        src={logo}
      />
    </Link>
  );
};

export default Logo;
