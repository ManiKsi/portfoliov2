import React, { useEffect, useRef } from "react";
import { useInView, useAnimation } from "framer-motion";
import styled from "styled-components";
import SocialIcons from "./subcomponents/SocialIcons";
import me from "../assets/images/me2.jpg";
import {
  Angular,
  Figma,
  Html,
  Illustrator,
  Photoshop,
  ReactIcon,
  Sass,
  Xd,
} from "./AllSvgs";
import Footer from "./subcomponents/Footer";
import Navbar from "./subcomponents/Navbar";
import { motion } from "framer-motion";
const Main = styled.div`
  padding: 1rem 1rem;
  /* background: linear-gradient(to top, #dad4ec 0%, #dad4ec 1%, #f3e7e9 100%); */
  height: 93vh;
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
    @media (min-width: 900px) {
      margin-bottom: 50px;
    }
  }
  h1 {
    font-size: 4rem;
    font-family: "ubuntu condensed";
    margin-bottom: 30px;
    @media (min-width: 900px) {
      font-size: 5rem;
      margin-bottom: 50px;
    }
  }
  img {
    width: 200px;
    border-radius: 100%;
    margin-top: 40px;
    filter: grayscale(50%);
    @media (min-width: 900px) {
      width: 250px;
      margin-top: 50px;
    }
  }
`;
const AboutInfo = styled(motion.div)`
  width: 100%;
  padding: 1rem 3rem;
  @media (min-width: 900px) {
    padding: 1rem 5rem;
  }
  h2 {
    font-size: 2rem;
    font-family: "ubuntu condensed";
    margin-bottom: 20px;
    font-weight: bold;
    @media (min-width: 900px) {
      font-size: 3rem;
      margin-top: 30px;
    }
  }
  p {
    @media (min-width: 900px) {
      font-size: 1rem;
    }
  }
`;
const SkillsInfo = styled.div`
  padding: 1rem 3rem;
  h1 {
    font-size: 1.2rem;
    margin-bottom: 20px;
    color: #47a4db;
  }
  @media (min-width: 900px) {
    padding: 1rem 5rem;
  }
`;
const SkillsList = styled.ul`
  list-style: none;
  li {
    margin-top: 10px;
    margin-bottom: 30px;
    h2 {
      font-size: 2rem;
      margin-bottom: 10px;
    }
    border: 2px solid #333;
    border-radius: 10px;
    padding: 1rem 1.5rem;
  }
`;
const Tools = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 20px 0px 10px 0px;
  & > * {
    width: 30px;
    height: 30px;
  }
`;
const OtherInfo = styled(motion.div)`
  padding: 1rem 3rem;
  @media (min-width: 900px) {
    padding: 1rem 5rem;
  }
  div {
    display: flex;
    flex-direction: column;
    margin: 20px 0px;
    h2 {
      font-size: 1.2rem !important;
      color: #47a4db;
    }
    section {
      display: flex;
      flex-direction: column;
      h3,
      h4 {
        font-family: "Cairo Play";
      }
      margin: 10px 0px;
    }
  }
`;
const animate = {
  hidden: {
    opactiy: 0,
    y: 10,
  },
  show: {
    opactiy: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const About = () => {
  const animation = useAnimation();
  const animationLeft = useAnimation();
  const animationRight = useAnimation();
  const ref = useRef(null);
  const ref1 = useRef(null);
  const isInView = useInView(ref);
  const isInView1 = useInView(ref1);

  useEffect(() => {
    if (isInView) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
        },
      });
    }
    if (!isInView) {
      animation.start({
        opacity: 0,
        y: 20,
        transition: {
          duration: 0.5,
        },
      });
    }
    if (isInView1) {
      animationLeft.start({
        opacity: 1,
        x: 0,
        transition: {
          duration: 1,
        },
      });
      animationRight.start({
        opacity: 1,
        x: 0,
        transition: {
          duration: 1,
        },
      });
    }
    if (!isInView1) {
      animationLeft.start({
        opacity: 0,
        x: -30,
        transition: {
          duration: 1,
        },
      });
      animationRight.start({
        opacity: 0,
        x: 30,
        transition: {
          duration: 1,
        },
      });
    }
  }, [animation, animationLeft, animationRight, isInView, isInView1]);

  return (
    <>
      <Navbar />
      <Main>
        <PageIntro>
          <p>Lets get to know each other</p>
          <motion.h1
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: { duration: 1, delay: 1 },
            }}
          >
            About
          </motion.h1>
          <SocialIcons />
          <img src={me} alt='me' />
        </PageIntro>
        <AboutInfo variants={animate} initial='hidden' animate='show'>
          <h2>I make web apps and I do it well.</h2>
          <p>
            With a passion for music, the stage and graphic design, I enjoy
            working with people who value aesthetics, who understand the power
            of simplicity and who know that a good customer experience is
            paramount.
            <br />
            <br />
            By keeping your identity at the heart of my approach, my goal is to
            find the simplest solution to meet your needs. <br />
            <br />
            My clients call on me for my efficiency, versatility and ease of
            communication (and also because I make incredible cookies, the
            secret is to put a lot of semi-salted butter in them).
          </p>
        </AboutInfo>
        <OtherInfo animate={animation} initial={animate.hidden}>
          <div>
            <h2>Eduction :</h2>
            <p>B.Sc, MCA</p>
          </div>
          <div>
            <h2>Experience :</h2>
            <section>
              <h3>Full stack web developer</h3>
              <h4>Deloitte India (2020 - till)</h4>
              <p>
                By keeping your identity at the heart of my approach, my goal is
                to find the simplest solution to meet your needs.
              </p>
            </section>
            <hr />
            <section ref={ref}>
              <h3>Jr Front end web developer</h3>
              <h4>Deloitte India (2019 - 2020)</h4>
              <p>
                By keeping your identity at the heart of my approach, my goal is
                to find the simplest solution to meet your needs.
              </p>
            </section>
          </div>
        </OtherInfo>
        <SkillsInfo>
          <h1>What I can do for your company :</h1>
          <SkillsList ref={ref1}>
            <motion.li animate={animationLeft}>
              <h2>Design and enhance your projects</h2>
              <p>
                From brand strategy to product design, I help you achieve your
                goals and solve complex problems through design.
              </p>
              <Tools>
                <Xd />
                <Figma />
                <Photoshop />
                <Illustrator />
              </Tools>
            </motion.li>
            <motion.li animate={animationRight}>
              <h2>Develope a tailored and responsive website</h2>
              <p>
                From brand strategy to product design, I help you achieve your
                goals and solve complex problems through design.
              </p>
              <Tools>
                <ReactIcon />
                <Angular />
                <Html />
                <Sass />
              </Tools>
            </motion.li>
          </SkillsList>
        </SkillsInfo>
        <Footer />
      </Main>
    </>
  );
};

export default About;
