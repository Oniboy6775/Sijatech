import React from "react";
import styled from "styled-components";

const BigNav = ({ list }) => {
  return (
    <Wrapper className="show-big-nav">
      {list.map((e, index) => (
        <li
          key={index}
          className={`${
            e.name === list[0].name ? "active btn nav__item" : "nav__item"
          }`}
        >
          <a href={e.link} className="nav__link">
            {e.name}
          </a>
        </li>
      ))}
    </Wrapper>
  );
};

export default BigNav;
const Wrapper = styled.ul`
  display: none;
  color: var(--grey-100);
  z-index: 10;
  .active {
    border: 1px solid var(--white);
  }
  .nav__item,
  .nav__link {
    color: inherit;
    margin-left: 0.5rem;
  }
  @media (min-width: 600px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
