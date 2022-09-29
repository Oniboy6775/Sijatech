import React from "react";
import styled from "styled-components";
import { HiCode } from "react-icons/hi";
import { GrCodeSandbox } from "react-icons/gr";
import { TbMessage2Code } from "react-icons/tb";

const OurServices = () => {
  const services = [
    {
      name: "Training",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam provident, sed alias nisi, delectus ullam, eius sit est totam voluptatibus doloremque? Tempora fugiat ex aliquid consequuntur impedit nesciunt. Accusamus, id!",
      icon: <TbMessage2Code />,
    },
    {
      name: "Internship",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam provident, sed alias nisi, delectus ullam, eius sit est totam voluptatibus doloremque? Tempora fugiat ex aliquid consequuntur impedit nesciunt. Accusamus, id!",
      icon: <GrCodeSandbox />,
    },
    {
      name: "Projects",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam provident, sed alias nisi, delectus ullam, eius sit est totam voluptatibus doloremque? Tempora fugiat ex aliquid consequuntur impedit nesciunt. Accusamus, id!",
      icon: <HiCode />,
    },
  ];
  return (
    <Wrapper className="container">
      <h2 className="title center">Our services</h2>
      <div className="title-underline"></div>
      <p className="title center">What we offer</p>
      <div className="services row">
        {services.map((service, index) => {
          const { icon, name, text } = service;
          return (
            <div className="service col">
              <div className="service__icon title">{icon}</div>
              <h3 className="center">{name}</h3>
              <p className="service__text">{text}</p>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default OurServices;
const Wrapper = styled.section`
  margin-top: 1rem;
  .service {
    padding: 0 2rem;
    text-align: center;
    margin-bottom: 1rem;
    svg {
      font-size: 3rem;
    }
    @media (min-width: 600px) {
      .service__text {
        text-align: center;
      }
    }
  }
`;
