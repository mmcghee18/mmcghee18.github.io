import React from "react";
import { SidebarWrapper, Link, ProjectTypes } from "../styles.js";

const Sidebar = ({ setProjectType }) => {
  return (
    <SidebarWrapper>
      <h3>
        <strong>Michelle McGhee</strong>
      </h3>

      <ProjectTypes>
        <Link href="#" onClick={() => setProjectType(null)}>
          ✨ All projects
        </Link>
        <Link href="#" onClick={() => setProjectType("code")}>
          👩🏽‍💻 Code
        </Link>
        <Link href="#" onClick={() => setProjectType("audio")}>
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
