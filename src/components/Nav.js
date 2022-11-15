import { useState } from "react";
import { BiAlignRight } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components";
import BigNav from "./BigNav";
import SmallNav from "./SmallNav";
import LOGO from "../images/logo.png";

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigation = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Login", link: "/login" },
    { name: "Register", link: "/register" },
  ];

  const toggleNav = () => setIsNavOpen(!isNavOpen);
  return (
    <Wrapper className="nav">
      <nav className="container">
        <div className="logo">
          <img src={LOGO} alt="logo" width="50px" className="img" />
        </div>
        <div onClick={toggleNav} className="hamburger">
          {isNavOpen ? <FaTimes /> : <BiAlignRight />}
        </div>
        <BigNav isNavOpen={isNavOpen} list={navigation} />
      </nav>
      <SmallNav isNavOpen={isNavOpen} list={navigation} />
    </Wrapper>
  );
};
export default Nav;

const Wrapper = styled.section`
  z-index: 2;
  background-color: var(--primary-800);
  color: var(--grey-100);
  background-color: var(--grey-300);
  color: var(--primary-800);
  .logo {
    width: 40px;
  }
  nav {
    display: flex;
    padding: 1rem 0;
    justify-content: space-between;
    align-items: center;
  }

  @media (min-width: 600px) {
    position: fixed;
    left: 0;
    right: 0;
  }
`;
