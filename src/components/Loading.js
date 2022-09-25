import React from "react";
import styled from "styled-components";

const View = styled.div`
  width: 100vw;
  height: 100vh;
  background: grey;
  position: relative;
  overflow: hidden;

  &:hover > :first-child {
    transform: translateY(-200%);
  }
  &:hover > :last-child {
    transform: translateY(200%);
  }
`;
// const Logo = styled.h1`
//   color: #fff;
//   position: absolute;
//   z-index: 100;
//   bottom: 50%;
//   right: 50%;
//   transition: all 1s ease-in-out;
//   ${View}:hover & {
//     bottom: 0px;
//   }
// `;
const Box1 = styled.div`
  background: linear-gradient(
    45deg,
    rgba(51, 51, 51, 1) 0%,
    rgba(68, 68, 68, 1) 50%,
    rgba(51, 51, 51, 1) 100%
  );
  position: absolute;
  top: -50%;
  width: 100%;
  height: 35%;
  transition: all 1.5s ease-in-out;
  :after {
    content: "";
    pointer-events: none;
    background: #333;
    position: absolute;
    width: 100%;
    height: 500%;
    left: 0;
    bottom: -200%;
    transform: skewY(-30deg);
    z-index: 100;
  }
`;
const Box2 = styled.div`
  background: #333;
  position: absolute;
  bottom: -50%;
  width: 100%;
  height: 35%;
  transition: all 1.5s ease-in-out;
  :after {
    content: "";
    pointer-events: none;
    background: inherit;
    position: absolute;
    width: 100%;
    height: 500%;
    left: 0;
    top: -200%;
    -webkit-transform: skewY(-30deg);
    -ms-transform: skewY(-30deg);
    transform: skewY(-30deg);
    z-index: 100;
  }
`;

const Loading = () => {
  return (
    <View>
      <Box1></Box1>
      <Box2></Box2>
    </View>
  );
};

export default Loading;
