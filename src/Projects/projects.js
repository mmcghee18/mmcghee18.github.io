//import threeUnicorns from "../images/three-unicorns-square.jpg";
import threeUnicorns from "../images/studio.jpeg";
import hpGraph from "../images/hp-graph.png";
import resource from "../images/single-click-sourcing.gif";
import snippets from "../images/snippets-in-action.gif";
import frisbee from "../images/frisbee.png";
import React from "react";

const projects = [
  {
    title: "It's LeviOsa, not LevioSA!",
    description: (
      <>
        <p>(2020) Visualizing every spell in the Harry Potter books.</p>
        {/* <a
          href="https://mmcghee18.github.io/harry-potter-spells/"
          target="_blank"
          style={{ textDecoration: "underline" }}
        >
          See it >>
        </a> */}
      </>
    ),
    tag: "code data-vis",
    link: "https://mmcghee18.github.io/harry-potter-spells/",
    image: hpGraph,
  },
  {
    title: "Software Engineer at Resource",
    description: (
      <>
        <p>
          As a core engineer at a small (10-15 people) startup, I built and
          iterated on Resource's web app, heavily using React, GraphQL/Apollo,
          Node.js, and MongoDB. I debugged customer issues, took new features
          from start to finish (often including design work), and led improv
          games at our weekly team meetings.
        </p>
        {/* <a
          href="https://www.resource.io/platform/"
          target="_blank"
          style={{ textDecoration: "underline" }}
        >
          See the Resource app >>
        </a> */}
      </>
    ),
    image: resource,
    tag: "code",
    link: "https://www.resource.io/platform/",
  },
  {
    title: "Embedded Code Snippets",
    description: (
      <>
        <p>
          During my internship at GitHub, I worked with 3 other interns to build
          embedded code snippets for github.com.
        </p>
        {/* <a
          href="https://github.blog/2017-08-15-introducing-embedded-code-snippets/"
          target="_blank"
          style={{ textDecoration: "underline" }}
        >
          See it >>
        </a> */}
      </>
    ),
    tag: "code",
    image: snippets,
    link: "https://github.blog/2017-08-15-introducing-embedded-code-snippets/",
  },
  {
    title: "Three Unicorns",
    description: (
      <>
        <p>
          (2017) Three Black women in tech, telling our stories, one podcast at
          a time.
        </p>
        {/* <a
          href="https://soundcloud.com/three-unicorns"
          target="_blank"
          style={{ textDecoration: "underline" }}
        >
          Take a listen >>
        </a> */}
      </>
    ),
    image: threeUnicorns,
    tag: "audio",
    link: "https://soundcloud.com/three-unicorns",
  },
  {
    title: "Ultimate Frisbee Goes Pro",
    description: (
      <>
        <p>
          What would a professional womxn’s sports team look like if we built it
          outside of every dominant template we currently know and see in the
          world?
        </p>
        {/* <a
          href="https://soundcloud.com/michmac202/ultimate-frisbee-exploring-the-pros-and-cons-of-going-pro"
          target="_blank"
          style={{ textDecoration: "underline" }}
        >
          Take a listen >>
        </a> */}
      </>
    ),
    tag: "audio",
    image: frisbee,
    link:
      "https://soundcloud.com/michmac202/ultimate-frisbee-exploring-the-pros-and-cons-of-going-pro",
  },
];

export default projects;
