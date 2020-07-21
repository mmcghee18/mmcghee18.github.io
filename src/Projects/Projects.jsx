import React from "react";
import { ProjectsWrapper } from "../styles.js";
import Project from "./Project.jsx";
import projects from "./projects.js";

const Projects = ({ projectType }) => {
  console.log({ projectType });
  return (
    <ProjectsWrapper>
      {projects.map(({ title, description, image, tag, link }) => {
        if (projectType === null) {
          return (
            <Project
              title={title}
              description={description}
              image={image}
              tag={tag}
              link={link}
            />
          );
        }
        if (tag.includes(projectType)) {
          return (
            <Project
              title={title}
              description={description}
              image={image}
              tag={tag}
              link={link}
            />
          );
        }
      })}
    </ProjectsWrapper>
  );
};

export default Projects;
