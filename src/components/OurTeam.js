import React from "react";
import styled from "styled-components";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Onisabi Abdullahi",
      position: "Frontend developer",
      image: "./images/abdullahi.png",
      links: [
        "https://www.facebook.com/onisabi.abdullahi/",
        "https://twitter.com/Abdullahioni2",
        "https://www.linkedin.com/in/onisabi-abdullahi-577313184/",
      ],
      website: "https://onisabi-portfolio.netlify.app",
    },
    {
      name: "Taogeeq Afolabi",
      position: "Senior Developer",
      image: "./images/tunde.png",
      links: [
        "https://m.facebook.com/afolabi.babatunde.100?eav=AfZdAjqSSRBIa4W3meBFJOWqHLoMUd92u48jMedac07GUdm_K9DOmmHNBzNQ4766Fb0&paipv=0",
        "https://mobile.twitter.com/bigafott",
        "https://www.linkedin.com/mwlite/in/taofeeq-afolabi-145107255",
      ],
      website: "https://onisabi-portfolio.netlify.app",
    },
    {
      name: "Iliasu Obafemi Afolabi ",
      position: "Frontend developer",
      image: "./images/iliasu.png",
      links: [
        "http://facebook.com/obafemi.biodun.1",
        "https://twitter.com/afoo__dev",
        "https://www.linkedin.com/mwlite/in/iliasu-afolabi-b963a7178",
      ],
      website: "https://onisabi-portfolio.netlify.app",
    },
    {
      name: "Joshua Oyeyemi",
      position: "Mobile App developer",
      image: "./images/abdullahi.png",
      links: [
        "https://www.facebook.com/onisabi.abdullahi/",
        "https://twitter.com/Abdullahioni2",
        "https://www.linkedin.com/in/onisabi-abdullahi-577313184/",
      ],
      website: "https://onisabi-portfolio.netlify.app",
    },
    {
      name: "Saheed Olamilekan",
      position: "Backend developer",
      image: "./images/saheed.png",
      links: [
        "https://m.facebook.com/afooo2",
        "https://mobile.twitter.com/Saidolamilekan",
        "https://www.linkedin.com/mwlite/in/saheed-afolabi-46a748254",
      ],
      website: "https://onisabi-portfolio.netlify.app",
    },
  ];
  return (
    <Wrapper className="container ">
      <h1 className="title">Our team</h1>
      <div className="title-underline"></div>
      <div className=" sm:flex sm:justify-center sm:gap-4 sm:overflow-y-auto  ">
        {teamMembers.map((e, index) => (
          <div
            key={index}
            className="relative my-3 border-2 bg-slate-200 py-4 sm:px-7 sm:pt-12"
          >
            <small className="absolute top-1 rounded-r-full bg-black p-1 text-sm capitalize text-white sm:right-0 sm:rounded-l-full sm:rounded-r-none">
              {e.position}
            </small>
            <div className="mx-auto w-28 ">
              <img src={e.image} alt="" className="mb-2 rounded-full" />
              <h1 className="text-center text-sm">{e.name}</h1>
            </div>
            <div className="m-4 flex items-center justify-center text-center">
              <a
                href={e.links[0]}
                target="blank"
                className="mx-2 rounded-full  "
              >
                <FaFacebook />
              </a>
              <a
                href={e.links[1]}
                target="blank"
                className="mx-2 rounded-full  "
              >
                <FaTwitter />
              </a>
              <a
                href={e.links[2]}
                target="blank"
                className="mx-2 rounded-full  "
              >
                <FaLinkedin />
              </a>
            </div>
            <a
              href={e.website}
              target="blank"
              className="btn btn-transparent btn-block "
            >
              View profile
            </a>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default OurTeam;
const Wrapper = styled.div``;
