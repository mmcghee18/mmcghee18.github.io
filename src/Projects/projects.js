import React from "react";
import lesMis from "../images/les-mis.png";
import threeUnicorns from "../images/studio.jpeg";
import hpGraph from "../images/hp-graph.png";
import resource from "../images/single-click-sourcing.gif";
import snippets from "../images/snippets-in-action.gif";
import frisbee from "../images/frisbee.png";

const projects = [
  {
    title: "It's LeviOsa, not LevioSA!",
    description: "Visualizing every spell in the Harry Potter books.",
    tag: "code data-vis",
    link: "https://mmcghee18.github.io/harry-potter-spells/",
    image: hpGraph,
  },
  {
    title: "Musical Themes in Les Miserables",
    description:
      "Visualizing the musical connections between songs in the musical Les Miserables.",
    tag: "code data-vis",
    link: "https://mmcghee18.github.io/les-mis-viz/",
    image: lesMis,
  },
  {
    title: "Software Engineer at Resource",
    description:
      "As a core engineer at a small (10-15 people) startup, I built and iterated on Resource's web app, heavily using React, GraphQL/Apollo, Node.js, and MongoDB. I debugged customer issues, took new features from start to finish (often including design work), and led improv games at our weekly team meetings.",
    image: resource,
    tag: "code",
    link: "https://www.resource.io/platform/",
  },
  {
    title: "Embedded Code Snippets",
    description:
      "During my internship at GitHub, I worked with 3 other interns to build embedded code snippets for github.com.",
    tag: "code",
    image: snippets,
    link: "https://github.blog/2017-08-15-introducing-embedded-code-snippets/",
  },
  {
    title: "Three Unicorns",
    description:
      "Three Black women in tech, telling our stories, one podcast at a time.",
    image: threeUnicorns,
    tag: "audio",
    link: "https://soundcloud.com/three-unicorns",
  },
  {
    title: "Ultimate Frisbee Goes Pro",
    description:
      "What would a professional womxn’s sports team look like if we built it outside of every dominant template we currently know and see in the world?",
    tag: "audio",
    image: frisbee,
    link:
      "https://soundcloud.com/michmac202/ultimate-frisbee-exploring-the-pros-and-cons-of-going-pro",
  },
];

export default projects;
