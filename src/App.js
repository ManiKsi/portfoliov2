import styled, { ThemeProvider } from "styled-components";

import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Work from "./components/Work";
import Loading from "./components/Loading";
import GlobalStyles from "./globalStyles";
import Navbar from "./components/subcomponents/Navbar";
import Skills from "./components/Skills";
import { Route, Routes, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
const Container = styled.div`
  height: 93vh;
  width: 100vw;
`;
function App() {
  const location = useLocation(null);
  return (
    <>
      <GlobalStyles />
      {/* <Home></Home> */}
      <AnimatePresence>
        <Container>
          <Routes location={location}>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/skills' element={<Skills />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/work' element={<Work />} />
          </Routes>
        </Container>
      </AnimatePresence>
    </>
  );
}

export default App;
