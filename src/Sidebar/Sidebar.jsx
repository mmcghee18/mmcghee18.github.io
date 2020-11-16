import React from "react";
import { SidebarWrapper, Link, ProjectTypes } from "../styles.js";

const Sidebar = ({ projectType, setProjectType }) => {
  return (
    <SidebarWrapper>
      <h2>
        Hi, I'm <strong>Michelle McGhee</strong>.
      </h2>

      <ProjectTypes>
        <Link
          href="#"
          onClick={() => setProjectType(null)}
          selected={projectType === null}
        >
          ✨ All projects
        </Link>
        <Link
          href="#"
          onClick={() => setProjectType("data-vis")}
          selected={projectType === "data-vis"}
        >
          📊 Data Visualization
        </Link>
        <Link
          href="#"
          onClick={() => setProjectType("eng")}
          selected={projectType === "eng"}
        >
          👩🏽‍💻 Software Engineering
        </Link>
        <Link
          href="#"
          onClick={() => setProjectType("audio")}
          selected={projectType === "audio"}
        >
          🎙 Audio
        </Link>
      </ProjectTypes>

      <Link href="#" className="about" onClick={() => setProjectType("about")}>
        About
      </Link>
    </SidebarWrapper>
  );
};

export default Sidebar;
