import React from "react";
import styled from "styled-components";
// import IMG from "../images/landing.png";
import IMG2 from "../images/landing2.png";
const Hero = () => {
  return (
    <Wrapper
      style={{
        backgroundImage: `url(${IMG2})`,
        backgroundPosition: "fixed",
        backdropFilter: "blur(10px)",
      }}
      className=""
    >
      <div className="welcome">
        <h2 className="center">
          Welcome to <br />
          <span> SijaTech </span> Institute
        </h2>
        <p className="center">...embodiment of technology</p>
      </div>
    </Wrapper>
  );
};
export default Hero;
const Wrapper = styled.div`
  /* background: linear-gradient(to bottom red, blue); */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 40vh;
  border-bottom: 10px solid var(--primary-500);
  display: grid;
  place-items: center;
  .welcome {
    background-color: var(--grey-300);
    opacity: 0.9;
    padding: 1rem 0.5rem;
    border-radius: var(--borderRadius);
  }
  p {
    font-size: var(--extra-small-text);
    margin: 0;
  }
  span {
    color: var(--dark-red);
  }
  @media (min-width: 600px) {
    /* .welcome {
      display: none;
    } */
    min-height: 100vh;
    padding: 5rem 0;
  }
`;
