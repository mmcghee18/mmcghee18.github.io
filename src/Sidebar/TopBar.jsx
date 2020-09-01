import React, { useState } from "react";
import {
  Menu,
  TopBarWrapper,
  MichelleTitle,
  Link,
  ProjectTypes,
} from "../styles.js";
import { Drawer } from "antd";

const TopBar = ({ setProjectType }) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <TopBarWrapper>
      <Menu onClick={() => setOpenMenu(true)} />
      <MichelleTitle>Michelle McGhee</MichelleTitle>

      <Drawer
        title="Michelle McGhee"
        placement="left"
        closable={false}
        onClose={() => setOpenMenu(false)}
        visible={openMenu}
      >
        <div>
          <ProjectTypes>
            <Link
              href="#"
              onClick={() => {
                setProjectType(null);
                setOpenMenu(false);
              }}
            >
              ✨ All projects
            </Link>
            <Link
              href="#"
              onClick={() => {
                setProjectType("code");
                setOpenMenu(false);
              }}
            >
              👩🏽‍💻 Code
            </Link>
            <Link
              href="#"
              onClick={() => {
                setProjectType("audio");
                setOpenMenu(false);
              }}
            >
              🎙 Audio
            </Link>
          </ProjectTypes>
          <Link
            href="#"
            className="about"
            onClick={() => {
              setProjectType("about");
              setOpenMenu(false);
            }}
          >
            About
          </Link>
        </div>
      </Drawer>
    </TopBarWrapper>
  );
};

export default TopBar;
