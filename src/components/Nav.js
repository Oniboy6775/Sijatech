import { useState } from "react";
import { BiAlignRight } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components";

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);
  return (
    <Wrapper className="nav">
      <nav className="App">
        <div className="logo">
          <img src="" alt="logo" className="img" />
        </div>
        <div onClick={toggleNav} className="hamburger">
          {isNavOpen ? <FaTimes /> : <BiAlignRight />}
        </div>
      </nav>
    </Wrapper>
  );
};
export default Nav;

const Wrapper = styled.section`
  nav {
    display: flex;
    padding: 1rem 0;
    justify-content: space-between;
    align-items: center;
  }
`;
