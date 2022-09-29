import React from "react";
import styled from "styled-components";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiJavascript1, DiReact } from "react-icons/di";

const Courses = () => {
  const courses = [
    {
      name: "HTML",
      list: ["Introduction to HTML", "HTML5 layout"],
      icon: <AiFillHtml5 />,
    },
    {
      name: "CSS",
      list: ["Introduction to CSS", "CSS3 layout"],
      icon: <DiCss3 />,
    },
    {
      name: "JavaScript",
      list: ["Introduction to JavaScript", "JavaScript fundamentals"],
      icon: <DiJavascript1 />,
    },
    {
      name: "React",
      list: [
        "Introduction to React",
        "React state & props",
        "Forms & Event handling",
        "React state management",
      ],
      icon: <DiReact />,
    },
  ];
  return (
    <Wrapper className="container">
      <h2 className="title">Available courses</h2>
      <div className="title-underline"></div>
      <div className="courses  row">
        {courses.map((course, index) => {
          const { icon, list, name } = course;
          return (
            <div className="course col" key={index}>
              <div className="course__icon center">{icon}</div>
              <h4 className="center">{name}</h4>
              <div className="course__list">
                {list.map((e, index) => (
                  <p key={index} className="course__list__item">
                    {icon}
                    <span>{e}</span>
                  </p>
                ))}
              </div>
              <button className="btn btn-block">More</button>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Courses;
const Wrapper = styled.section`
  .course__icon {
    color: var(--light-red);
  }
  .course {
    padding: 1rem;
    margin-bottom: 1rem;
    border: 2px solid var(--primary-300);
    border-radius: var(--borderRadius);
  }
  .course__list__item {
    display: flex;
    align-items: center;
    text-transform: capitalize;
    svg {
      margin-right: 1rem;
    }
  }
  @media (min-width: 600px) {
    .row {
      display: grid;
      gap: 0.5rem;
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
