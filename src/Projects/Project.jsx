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
      <ImageWrapper onClick={() => set((state) => !state)}>
        <div style={{ position: "relative" }}>
          <FlippingImage
            src={image}
            style={{
              opacity: opacity.interpolate((o) => 1 - o),
              transform,
            }}
          />
          <FlippingDescription
            style={{
              opacity,
              transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
            }}
          >
            <Description>{description}</Description>
          </FlippingDescription>
        </div>
        {/* This is here so ImageWrapper has height */}
        <Image src={image} style={{ opacity: 0 }} />
      </ImageWrapper>
      <a
        href={link}
        target="_blank"
        style={{ textDecoration: "underline", marginTop: "10px" }}
      >
        See it >>
      </a>
    </ProjectWrapper>
  );
};

export default Project;
