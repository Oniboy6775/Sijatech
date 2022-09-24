import React from "react";
import styled from "styled-components";
import IMG from "../images/landing.png";
import IMG2 from "../images/landing2.png";
const Hero = () => {
  return (
    <Wrapper style={{ backgroundImage: `url(${IMG})` }} className="">
      <h1 className="title">
        SIJA<span>TECH</span>
      </h1>
    </Wrapper>
  );
};
// rgba(210, 228, 253, 0.9)
export default Hero;
const Wrapper = styled.div`
  /* background: linear-gradient(
    100deg,
    rgba(63, 63, 63, 0.8) 0%,
    rgba(255, 255, 255, 0) 25%
  ); */
  /* background-attachment: fixed; */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 40vh;
`;
