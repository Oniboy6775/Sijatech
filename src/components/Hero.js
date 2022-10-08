import React from "react";
import styled from "styled-components";
import IMG from "../images/logo2.png";
import BACKGROUND from "../images/landing2.png";
const Hero = () => {
  return (
    <Wrapper
      style={{
        backgroundImage: `url(${BACKGROUND})`,
        backgroundPosition: "fixed",
      }}
    >
      <div className="welcome">
        {/* <h3 className="center">
          Welcome to <br />
          <h2>
            Sija<span>Tech </span> Institute
          </h2>
        </h3>
        <p className="center">...embodiment of technology</p> */}
        <img src={IMG} alt="" className="img" />
        <h6 className="center">
          subsidiary of Best Option Advancement LTD- RC1266325
        </h6>
      </div>
    </Wrapper>
  );
};
export default Hero;
const Wrapper = styled.div`
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
    max-width: 50vw;
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
