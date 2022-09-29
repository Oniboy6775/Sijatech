import React from "react";
import styled from "styled-components";

const SmallNav = ({ isNavOpen, list }) => {
  return (
    <NavBar isNavOpen={isNavOpen} className="hide-small-nav ">
      {list.map((e, index) => (
        <li
          key={index}
          className={`${
            e.name === list[list.length - 1].name
              ? "btn nav__item"
              : "nav__item"
          }`}
        >
          <a href={e.link} className="nav__link">
            {e.name}
          </a>
        </li>
      ))}
    </NavBar>
  );
};

export default SmallNav;
const NavBar = styled.ul`
  opacity: ${({ isNavOpen }) => (isNavOpen ? "1" : "0")};
  max-height: ${({ isNavOpen }) => (isNavOpen ? "100vh" : "0px")};
  transition: var(--transition);
  display: grid;
  place-items: center;
  text-transform: capitalize;
  .nav__item {
    margin: auto;
    margin: 0.375rem;
    padding: 0.375rem;
    &:hover,
    &:focus {
      opacity: 0.7;
      cursor: pointer;
    }
  }
  .nav__link {
    color: inherit;
  }
`;
