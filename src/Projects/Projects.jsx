import React from "react";
import { ProjectsWrapper, AllProjects } from "../styles.js";
import Project from "./Project.jsx";
import projects from "./projects.js";

const Projects = ({ projectType }) => {
  let projectsToDisplay = [];
  if (projectType === null) projectsToDisplay = projects;
  else {
    projectsToDisplay = projects.filter((project) =>
      project.tag.includes(projectType)
    );
  }

  if (projectType === "code") {
    const justCode = projectsToDisplay.filter(
      (project) => project.tag === "code"
    );
    const dataVis = projectsToDisplay.filter((project) =>
      project.tag.includes("data-vis")
    );

    return (
      <AllProjects>
        <h2 style={{ marginBottom: 0 }}>
          <strong>Data Vis</strong>
        </h2>
        <ProjectsWrapper>
          {dataVis.map(({ title, description, image, tag, link }) => {
            if (tag.includes("data-vis")) {
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
        <h2 style={{ marginBottom: 0 }}>
          <strong>Software Engineering</strong>
        </h2>
        <ProjectsWrapper>
          {justCode.map(({ title, description, image, tag, link }) => {
            if (tag.includes("code") && !tag.includes("data-vis")) {
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
      </AllProjects>
    );
  }

  return (
    <AllProjects>
      <ProjectsWrapper>
        {projectsToDisplay.map(({ title, description, image, tag, link }) => (
          <Project
            title={title}
            description={description}
            image={image}
            tag={tag}
            link={link}
          />
        ))}
      </ProjectsWrapper>
    </AllProjects>
  );
};

export default Projects;
