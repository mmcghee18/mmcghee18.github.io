import styled, { createGlobalStyle } from "styled-components";
import { animated } from "react-spring";
import { LinkedinSquare } from "@styled-icons/boxicons-logos";
import { Github } from "@styled-icons/boxicons-logos";
import { Email } from "@styled-icons/material-outlined";
import { MenuOutlined } from "@ant-design/icons";

const maxSizes = {
  mobile: "480px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "2560px",
};
const devices = {
  mobile: `(max-width: ${maxSizes.mobile})`,
  tablet: `(max-width: ${maxSizes.tablet})`,
  laptop: `(max-width: ${maxSizes.laptop})`,
  desktop: `(max-width: ${maxSizes.desktop})`,
};

// App
export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'National 2 Web', sans-serif;
    background-color: white;
    color: black;
  }

  strong {
    font-family: 'National 2 Web Bold';
  }

  a {
    color: #50a8e6;

    :hover {
      color: #50a8e6;
    }
  }
`;

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media ${devices.tablet} {
    flex-direction: column;
    align-items: center;
  }
`;

// Projects
export const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const AllProjects = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px;
`;

// Project
export const ProjectWrapper = styled.div`
  width: 45%;
  margin: 10px;

  @media ${devices.mobile} {
    width: 80%;
    margin: 20px;
  }
`;

export const ProjectLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Description = styled.div`
  color: grey;
  margin-top: 1em;
`;

export const FlippingImage = styled(animated.img)`
  position: absolute;
  width: 100%;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.25);
`;

export const FlippingDescription = styled(animated.div)`
  width: 90%;
  position: absolute;
`;

export const Image = styled.img`
  width: 100%;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.25);
`;

export const ImageWrapper = styled.div`
  width: 90%;
  cursor: pointer;
`;

// TopBar
export const Menu = styled(MenuOutlined)`
  display: none;

  @media ${devices.tablet} {
    display: flex;
    position: absolute;
    left: 20px;
    font-size: 24px;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const MichelleTitle = styled.h1`
  font-size: 1.5em;
  margin: 0;
`;

export const TopBarWrapper = styled.div`
  display: none;

  @media ${devices.tablet} {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 0px;
    z-index: 1000;
    background: #e3e9ef;
    width: 100%;
    padding: 15px;
  }
`;

// Sidebar
export const SidebarWrapper = styled.div`
  position: sticky;
  top: 50px;
  margin-left: 50px;
  margin-top: 50px;
  margin-right: 50px;
  width: 600px;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 150px;

  @media ${devices.tablet} {
    display: none;
  }
`;

export const ProjectTypes = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

export const Link = styled.a`
  font-size: 0.85em;
  margin-bottom: 5px;
  text-decoration: none;
  color: black;
`;

// About
export const AboutWrapper = styled.div`
  width: 80%;
  margin-top: 50px;
  margin-right: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${devices.tablet} {
    margin-right: 0px;
  }
`;

export const AboutDescription = styled.div`
  width: 500px;
  max-width: 100%;

  @media ${devices.tablet} {
    text-align: center;
  }
`;

export const ProfilePhoto = styled.img`
  border-radius: 100%;
  font-size: 2.25em;
  height: 5em;
  margin: 0 0 0.75em 0;
`;

export const EmailIcon = styled(Email)`
  color: #50a8e6;
  margin-right: 1em;
`;

export const GitHubIcon = styled(Github)`
  color: #50a8e6;
  margin-right: 1em;
`;

export const LinkedInIcon = styled(LinkedinSquare)`
  color: #50a8e6;
`;
