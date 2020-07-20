import React, { useState } from "react";
import Projects from "./Projects/Projects.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";
import GlobalFonts from "./fonts/fonts.js";
import { GlobalStyle, AppWrapper } from "./styles.js";

function App() {
  const [projectType, setProjectType] = useState(null);
  return (
    <AppWrapper>
      <GlobalStyle />
      <GlobalFonts />
      <Sidebar setProjectType={setProjectType} />
      <Projects projectType={projectType} />
    </AppWrapper>
  );
}

export default App;
