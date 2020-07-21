import React from "react";
import {
  AboutWrapper,
  ProfilePhoto,
  EmailIcon,
  LinkedInIcon,
  GitHubIcon,
} from "../styles.js";
import photo from "../images/header-me.jpg";

const About = () => {
  return (
    <AboutWrapper>
      <ProfilePhoto src={photo} />
      <div style={{ width: "500px" }}>
        <p>Hi! I'm Michelle.</p>
        <p>
          <strong>I'm a fullstack developer who loves to tell stories.</strong>{" "}
          I love to combine these two things whenever possible.
        </p>
        <p>
          When I'm not building stuff, you can find me{" "}
          <a href="https://www.storycraftclass.com/">
            teaching live storytelling workshops
          </a>
          ,{" "}
          <a href="https://youtu.be/66lARLKyYjU?t=50">chasing plastic discs</a>,
          or drinking boba.
        </p>
        <p>Wanna get in touch? Email me at michmac202@gmail.com.</p>
      </div>
      <div style={{ marginTop: "2em" }}>
        <a
          target="_blank"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=michmac202@gmail.com"
        >
          <EmailIcon size="30" />
        </a>
        <a target="_blank" href="https://github.com/mmcghee18">
          <GitHubIcon size="30" />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/michelle-mcghee-252739103/"
        >
          <LinkedInIcon size="30" />
        </a>
      </div>
    </AboutWrapper>
  );
};

export default About;
