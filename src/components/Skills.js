import React from "react";
import styled from "styled-components";
import {
  Angular,
  Bootstrap,
  Css,
  Dynamo,
  Express,
  Firebase,
  Framer,
  Github,
  Html,
  Lambda,
  MangoDb,
  MySql,
  Node,
  Php,
  ReactIcon,
  Sass,
  StyledComponent,
  Tailwind,
  Wordpress,
  Xd,
  Xd2,
} from "./AllSvgs";
import Footer from "./subcomponents/Footer";
import Navbar from "./subcomponents/Navbar";

const Main = styled.div`
  padding: 1rem 1rem;
  margin-top: 7vh;
  /* background: linear-gradient(to top, #dad4ec 0%, #dad4ec 1%, #f3e7e9 100%); */
  height: 93vh;
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
const SkillsInfo = styled.div`
  padding: 0rem 2rem 1rem 2rem;
  @media (min-width: 900px) {
    padding: 0rem 5rem 1rem 5rem;
  }
`;
const SkillsIntro = styled.div`
  p {
    font-size: 0.9rem;
    @media (min-width: 900px) {
      font-size: 1rem;
    }
  }
`;

const SkillsList = styled.ul`
  list-style-type: none;
  li {
    margin: 20px 0px;
    h2 {
      color: #47a4db;
      font-size: 2rem;
    }
    section {
      padding: 5px 10px;
      div {
        margin: 20px 0px;
        @media (min-width: 900px) {
          margin-top: 40px;
        }
        h3 {
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          margin-bottom: 10px;
          svg {
            width: 30px;
            height: 30px;
            margin-right: 10px;
          }
        }
        p {
          font-size: 0.9rem;
          padding: 5px 10px;
          @media (min-width: 900px) {
            font-size: 1rem;
          }
        }
      }
    }
  }
`;
const SkillsBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  & > * {
    width: 30px;
    height: 30px;
    @media (min-width: 900px) {
      width: 50px;
      height: 50px;
    }
  }
`;
const Skills = () => {
  return (
    <>
      <Navbar />
      <Main>
        <PageIntro>
          <p>I am highly adoptable</p>
          <h1>Skills</h1>
        </PageIntro>
        <SkillsInfo>
          <SkillsIntro>
            <p>Do minim reprehenderit nulla qui quis ad ad amet.</p>
          </SkillsIntro>
          <SkillsList>
            {/* Fronted */}
            <li>
              <h2>Fronted :</h2>
              <section>
                <div>
                  <h3>
                    <ReactIcon /> React
                  </h3>
                  <p>
                    Sunt esse exercitation commodo duis. Dolore fugiat mollit
                    occaecat magna Lorem anim adipisicing cupidatat culpa.
                  </p>
                </div>
                <div>
                  <h3>
                    <Angular /> Angular
                  </h3>
                  <p>
                    Sunt esse exercitation commodo duis. Dolore fugiat mollit
                    occaecat magna Lorem anim adipisicing cupidatat culpa.
                  </p>
                </div>
                <div>
                  <h3>
                    <Css /> Others
                  </h3>
                  <p>
                    Sunt esse exercitation commodo duis. Dolore fugiat mollit
                    occaecat magna Lorem anim adipisicing cupidatat culpa.
                  </p>
                </div>
                <SkillsBar>
                  <Tailwind />
                  <Bootstrap />
                  <StyledComponent />
                  <Framer />
                  <Sass />
                </SkillsBar>
              </section>
            </li>
            {/* Backend */}
            <li>
              <h2>Backend :</h2>
              <section>
                <div>
                  <h3>
                    <Node /> Node JS
                  </h3>
                  <p>
                    Sunt esse exercitation commodo duis. Dolore fugiat mollit
                    occaecat magna Lorem anim adipisicing cupidatat culpa.
                  </p>
                </div>
                <div>
                  <h3>
                    <Php /> PHP
                  </h3>
                  <p>
                    Sunt esse exercitation commodo duis. Dolore fugiat mollit
                    occaecat magna Lorem anim adipisicing cupidatat culpa.
                  </p>
                </div>
                <div>
                  <h3>
                    <Css fill='purple' /> Others
                  </h3>
                  <p>
                    Sunt esse exercitation commodo duis. Dolore fugiat mollit
                    occaecat magna Lorem anim adipisicing cupidatat culpa.
                  </p>
                </div>
                <SkillsBar>
                  <Express />
                  <MangoDb />
                  <MySql />
                  <Dynamo />
                </SkillsBar>
              </section>
            </li>
            {/* Deploy */}
            <li>
              <h2>DevOps :</h2>
              <section>
                <div>
                  <p>
                    Sunt esse exercitation commodo duis. Dolore fugiat mollit
                    occaecat magna Lorem anim adipisicing cupidatat culpa.
                  </p>
                </div>

                <SkillsBar>
                  <Firebase />
                  <Lambda />
                  <Github />
                  <Wordpress />
                </SkillsBar>
              </section>
            </li>
          </SkillsList>
        </SkillsInfo>
        <Footer />
      </Main>
    </>
  );
};

export default Skills;
