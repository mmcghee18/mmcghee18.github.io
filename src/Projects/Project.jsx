import React from "react";
import laptops from "../images/laptops.jpg";
import { ProjectCard, ProjectLink, Image, Description } from "../styles.js";

const Project = ({
  title,
  description,
  image = laptops,
  link = "#",
  year = null,
}) => {
  return (
    <ProjectCard>
      <ProjectLink href={link} target="_blank">
        <Image src={image} />
        <h4>{title}</h4>
        <Description>
          {year ? "(" + year + ")" : null} {description}
        </Description>
      </ProjectLink>
    </ProjectCard>
  );
};

export default Project;
