import React from "react";
import styled from "styled-components";
import crowned from "../assets/images/projects/crowned.png";
import { Github, Html, ReactIcon, Tailwind } from "./AllSvgs";
import Footer from "./subcomponents/Footer";
import Navbar from "./subcomponents/Navbar";
import { motion } from "framer-motion";

const Main = styled.div`
  padding: 1rem 1rem;
  /* background: linear-gradient(to top, #dad4ec 0%, #dad4ec 1%, #f3e7e9 100%); */
  margin-top: 7vh;
`;
const PageIntro = styled.div`
  width: 100%;
  padding: 4rem 3rem 1rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  p {
    color: #fcb041;
    text-transform: uppercase;
    font-size: 0.7rem;
    font-weight: bold;
    letter-spacing: 0.4rem;
    margin-bottom: 30px;
  }
  h1 {
    font-size: 4rem;
    font-family: "ubuntu condensed";
    margin-bottom: 30px;
    @media (min-width: 900px) {
      font-size: 5rem;
    }
  }
`;
const Projects = styled(motion.ul)`
  padding: 1rem 2rem;
  @media (min-width: 900px) {
    padding: 1rem 5rem;
  }
  list-style: none;
  h4 {
    font-size: 0.9rem;
    font-family: "Cairo Play";
    color: #aaa;
    @media (min-width: 900px) {
      font-size: 1rem;
    }
  }
  li {
    /* background-color: #333;
    color: #fff; */
    margin-top: 40px;
    border: 2px solid #333;
    border-radius: 10px;
    padding: 1rem 1.5rem;
    h3 {
      font-size: 1.5rem;
      font-family: "Cairo Play";
      margin-bottom: 10px;
      width: 100%;
      border-bottom: 1px solid #aaa;
    }
    p {
      font-size: 0.8rem;
      @media (min-width: 900px) {
        font-size: 1rem;
      }
    }
    img {
      width: 100%;
    }
  }
`;
const Tools = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  margin: 20px 0px 20px 0px;
  & > svg {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
`;
const Actions = styled.div`
  justify-self: end;
  display: flex;
  justify-content: space-between;
  margin: 10px 0px 0px 0px;

  button {
    padding: 10px 50px;
    margin-right: 10px;
    background-color: #fff;
    color: #333;
    border: 1px solid #333;
    border-radius: 10px;
    cursor: pointer;
  }
  svg {
    width: 30px;
    &:hover {
      scale: 1.1;
      transition: all 0.5s ease;
      cursor: pointer;
    }
  }
`;
const Work = () => {
  return (
    <>
      <Navbar />
      <Main>
        <PageIntro>
          <p>I can get things done</p>
          <motion.h1
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: { duration: 1, delay: 1 },
            }}
          >
            Work
          </motion.h1>
        </PageIntro>
        <Projects
          initial={{
            opacity: 0,
            y: 100,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 1 },
          }}
        >
          <h4>
            I am not allowed to showcase the projects that I have worked for my
            company.
            <br />
            But here are the some of the projects that I've built in my free
            time.
          </h4>
          <li>
            <h3>Crowned</h3>
            <img src={crowned} alt='img' />
            <p>
              Ut et ipsum commodo duis sunt aliquip proident pariatur fugiat
              Lorem tempor nulla. Tempor dolore laborum dolor laborum excepteur
              voluptate sunt elit. Tempor ullamco eu aliquip nisi eiusmod sit
              minim adipisicing enim ut id id.
            </p>
            <Tools>
              <ReactIcon />
              <Html />
              <Tailwind />
            </Tools>
            <hr />
            <Actions>
              <motion.button
                initial={{
                  scale: 1,
                  background: "#fff",
                  color: "#333",
                  border: "1px solid #333",
                }}
                whileHover={{
                  scale: 1.1,
                  background: "#333",
                  color: "#fff",
                  border: "1px solid #fff",
                }}
              >
                Visit
              </motion.button>
              <Github />
            </Actions>
          </li>
          <li>
            <h3>Crowned</h3>
            <img src={crowned} alt='img' />
            <p>
              Ut et ipsum commodo duis sunt aliquip proident pariatur fugiat
              Lorem tempor nulla. Tempor dolore laborum dolor laborum excepteur
              voluptate sunt elit. Tempor ullamco eu aliquip nisi eiusmod sit
              minim adipisicing enim ut id id.
            </p>
            <Tools>
              <ReactIcon />
              <Html />
              <Tailwind />
            </Tools>
            <hr />
            <Actions>
              <button>Visit</button>
              <Github />
            </Actions>
          </li>
          <li>
            <h3>Crowned</h3>
            <img src={crowned} alt='img' />
            <p>
              Ut et ipsum commodo duis sunt aliquip proident pariatur fugiat
              Lorem tempor nulla. Tempor dolore laborum dolor laborum excepteur
              voluptate sunt elit. Tempor ullamco eu aliquip nisi eiusmod sit
              minim adipisicing enim ut id id.
            </p>
            <Tools>
              <ReactIcon />
              <Html />
              <Tailwind />
            </Tools>
            <hr />
            <Actions>
              <button>Visit</button>
              <Github />
            </Actions>
          </li>
          <li>
            <h3>Crowned</h3>
            <img src={crowned} alt='img' />
            <p>
              Ut et ipsum commodo duis sunt aliquip proident pariatur fugiat
              Lorem tempor nulla. Tempor dolore laborum dolor laborum excepteur
              voluptate sunt elit. Tempor ullamco eu aliquip nisi eiusmod sit
              minim adipisicing enim ut id id.
            </p>
            <Tools>
              <ReactIcon />
              <Html />
              <Tailwind />
            </Tools>
            <hr />
            <Actions>
              <button>Visit</button>
              <Github />
            </Actions>
          </li>
        </Projects>
        <Footer />
      </Main>
    </>
  );
};

export default Work;
