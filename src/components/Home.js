import React from "react";
import styled from "styled-components";
import Button from "./subcomponents/Button";
import Navbar from "./subcomponents/Navbar";
import me from "../assets/images/me3.jpg";
import SocialIcons from "./subcomponents/SocialIcons";
import { motion } from "framer-motion";

const Main = styled(motion.div)`
  padding: 1rem 1rem;
  /* background: linear-gradient(to top, #dad4ec 0%, #dad4ec 1%, #f3e7e9 100%); */
  margin-top: 7vh;
  @media (min-width: 800px) {
    padding-top: 2rem;
  }
`;
const IntroContent = styled.div`
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 900px) {
    display: block;
    margin: 0 auto;
    max-width: 70vw;
  }
  position: relative;
  & > * {
    margin: calc(0rem + 1vw) 0;
  }
  p {
    font-size: 1rem;
    text-align: center;
    @media (min-width: 800px) {
      font-size: 1.6rem;
      margin-bottom: -20px;
    }
  }
  div {
    text-align: center;
    display: flex;
    flex-direction: column;
  }
  div h1 {
    font-size: 3rem;
    font-family: "Ubuntu Condensed" !important;
    -webkit-text-stroke: 1px #999;
    color: transparent;
    margin-bottom: -5px;
    @media (min-width: 900px) {
      font-size: 11rem;
      margin-bottom: -60px;
    }
  }
  & > div > h1:first-of-type {
    color: #333;
    -webkit-text-stroke: 0px;
  }
  & > p:last-child {
    text-align: left;
    margin-top: 30px;
    margin-left: 30px;
    /* @media (min-width: 900px) {
      position: absolute;
      left: calc(2rem + 10vw);
      bottom: 0px;
    } */
  }
`;
const IntroButton = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 4vh;
  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    margin-top: 100px;
    position: absolute;
    z-index: 5;
  }
  & > :first-child {
    margin-bottom: 20px;
    background-color: #47a4db;
    border: #fff;
    @media (min-width: 900px) {
      width: 300px;
      height: 55px;
      font-size: 18px;
      margin-right: 50px;
      background-color: #333;
      border-width: 2px;
      color: #fff;
    }
  }
  & > :last-child {
    @media (min-width: 900px) {
      width: 300px;
      height: 55px;
      font-size: 18px;
      background-color: transparent;
      border-width: 2px;
    }
  }
`;
const IntroPic = styled.div`
  margin-top: 5vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: calc(10rem + 20vw);
    margin-bottom: 25px;
    border-radius: 100%;
    @media (min-width: 800px) {
      position: absolute;
      bottom: 0;
      filter: grayscale(100%);
    }
  }
  & > :nth-child(2) {
    @media (min-width: 900px) {
      position: absolute;
      width: 50px;
      height: 250px;
      display: flex;
      flex-direction: column;
      top: 50%;
      left: 70px;
      transform: translateY(-50%);
    }
  }
  & > :last-child {
    margin-top: 35px;
    background-color: #ef416c;
    border: #fff;
    @media (min-width: 900px) {
      display: none;
    }
  }
`;

const Home = () => {
  return (
    <>
      <Navbar />
      <Main
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 1 },
        }}
      >
        <IntroContent>
          <p>
            <motion.span
              style={{ display: "inline-block" }}
              animate={{
                rotate: [0, 20, 10, 10],
                transition: { duration: 0.5, repeat: 2, delay: 2 },
              }}
            >
              👋
            </motion.span>
            , my name is Manikanta and I am a professional
          </p>
          <div>
            <h1>Webdesigner</h1>
            <motion.h1
              initial={{
                opacity: 0,
                x: -100,
              }}
              animate={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 1,
                  delay: 0.5,
                },
              }}
            >
              &Webdeveloper
            </motion.h1>
          </div>
          <p>based in AP, India</p>
        </IntroContent>
        <IntroButton>
          <Button>See my work</Button>
          <Button theme='light'>About Me</Button>
        </IntroButton>
        <IntroPic>
          <motion.img
            initial={{
              opacity: 0,
              y: -50,
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                delay: 0.5,
              },
            }}
            src={me}
            alt='me'
          />
          <SocialIcons />
          <Button>Download CV</Button>
        </IntroPic>

        {/* <Button theme='dark'>Why hire me?</Button> */}
      </Main>
    </>
  );
};

export default Home;
