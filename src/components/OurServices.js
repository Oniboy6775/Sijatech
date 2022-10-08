import React from "react";
import styled from "styled-components";
import { HiCode } from "react-icons/hi";
import { GrCodeSandbox } from "react-icons/gr";
import { TbMessage2Code } from "react-icons/tb";

const OurServices = () => {
  const services = [
    {
      name: "Training",
      text: "At SijaTech we offer varieties of programing courses covering all you need to know about developing good looking  and deliverable websites for clients and for your business ",
      icon: <TbMessage2Code />,
    },
    {
      name: "Internship",
      text: "We also have internship program for both advance and beginner level in programing, who is aiming to perfect his/her work for clients. These service comprises of frontend, backend and mobile app development ",
      icon: <GrCodeSandbox />,
    },
    {
      name: "Projects",
      text: "We help clients and business owners to build eye catchy, well looking and highly customizable websites. These include Blogs, Portfolio, Business, E-commerce, school and administrator websites.",
      icon: <HiCode />,
    },
  ];
  return (
    <Wrapper className="container">
      <h2 className="title center">Our services</h2>
      <div className="title-underline"></div>
      <h6 className="title center">What we offer</h6>
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
  position: relative;
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
