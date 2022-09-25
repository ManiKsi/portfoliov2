import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import Footer from "./Footer";
import Logo from "./Logo";
import MenuIcon from "./MenuIcon";

const Container = styled.div`
  position: fixed;
  top: 0;
  padding: 1rem;
  left: 0;
  width: 100%;
  height: 7vh;
  display: flex;
  z-index: 100;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  @media (min-width: 800px) {
    padding: 2.5rem 4rem;
  }
`;

const Menu = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #fff;
  z-index: 100;
  padding: 2rem;
  @media (min-width: 800px) {
    margin-top: 2vh;
    padding: 2rem 4rem;
  }
  ul {
    list-style: none;
    li {
      font-size: 3rem;
      border-bottom: 2px solid #333;
    }
    div {
      margin-top: 100px;
      display: flex;
      align-items: center;
      flex-direction: column;
      p {
        font-family: "Cairo";
        color: #848484;
        font-size: 1rem;
      }
      button {
        margin-top: 20px;
        font-weight: bold;
      }
    }
  }
`;
const NavItem = {
  hidden: {
    opacity: 0,

    width: 0,
    transition: { duration: 1 },
  },
  show: {
    opacity: 1,

    width: "100%",
    transition: { duration: 1 },
  },
};
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const clickHandler = () => {
    setOpen(!open);
  };
  useEffect(() => {
    if (open) {
      document.body.style.height = "100vh";
      document.body.style.overflow = "hidden";
    }
    if (!open) {
      document.body.style.height = "100%";
      document.body.style.overflowY = "scroll";
    }
  }, [open]);
  return (
    <>
      <Container>
        <Logo />
        <MenuIcon setOpen={clickHandler} />
      </Container>
      <AnimatePresence>
        {open && (
          <Menu
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              staggerChildren: 0.2,
            }}
            exit={{ opacity: 0 }}
          >
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  staggerChildren: 0.5,
                },
              }}
            >
              <motion.li variants={NavItem} initial='hidden' animate='show'>
                <Link to='/about'>About</Link>
              </motion.li>
              <motion.li variants={NavItem} initial='hidden' animate='show'>
                <Link to='/work'>Work</Link>
              </motion.li>
              <motion.li variants={NavItem} initial='hidden' animate='show'>
                <Link to='/skills'>Skills</Link>
              </motion.li>
              <motion.div
                initial={{
                  opacity: 0,
                  y: -20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", duration: 1, delay: 0.3 },
                }}
              >
                <p>manikantaksi2@gmail.com</p>
                <p>+91 6302257117</p>
                <Button>Say Hi!</Button>
              </motion.div>
            </motion.ul>
            <br />
            <Footer />
          </Menu>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
