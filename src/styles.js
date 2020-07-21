import styled, { createGlobalStyle } from "styled-components";
import { animated } from "react-spring";

// App
export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'National 2 Web', sans-serif;
    background-color: white;
    color: black;
  }

  a {
    text-decoration: none;
    color: inherit;

    :hover {
      color: #50a8e6;
    }
  }
`;

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

// Projects
export const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

// Project
export const ProjectWrapper = styled.div`
  width: 45%;
  margin: 10px;
`;

export const ProjectLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Description = styled.div`
  color: grey;
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
`;

export const ProjectTypes = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

export const Link = styled.a`
  font-size: 0.85em;
  margin-bottom: 5px;
`;
