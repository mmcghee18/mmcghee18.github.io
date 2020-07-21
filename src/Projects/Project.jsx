import React, { useState } from "react";
import laptops from "../images/laptops.jpg";
import {
  ProjectWrapper,
  ProjectLink,
  FlippingImage,
  FlippingDescription,
  Image,
  ImageWrapper,
  Description,
} from "../styles.js";
import { useSpring, animated } from "react-spring";

const Project = ({ title, description, image = laptops, link = "#" }) => {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <ProjectWrapper>
      <h4>{title}</h4>
      <ImageWrapper>
        <a href={link} target="_blank">
          <Image src={image} />
        </a>
      </ImageWrapper>
      <Description>{description}</Description>
    </ProjectWrapper>
  );
};

export default Project;
