import React from "react";
import lesMis from "../images/les-mis-colored.png";
import threeUnicorns from "../images/studio.jpeg";
import hpGraph from "../images/hp-graph.png";
import resource from "../images/resource.gif";
import snippets from "../images/snippets-in-action.gif";
import frisbee from "../images/frisbee.png";
import pudding from "../images/social-facebook.jpg";

const projects = [
  {
    title: "Who's in the crossword?",
    description:
      "A visual essay for The Pudding looking at inclusivity and representation in crossword puzzles. Will be published 11/17!",
    tag: "data-vis",
    link: "https://pudding.cool", //"https://pudding.cool/2020/11/crossword/",
    image: pudding,
  },
  {
    title: '"It\'s LeviOsa, not LevioSA!"',
    description: "Visualizing every spell in the Harry Potter books.",
    tag: "data-vis",
    link: "https://mmcghee18.github.io/harry-potter-spells/",
    image: hpGraph,
  },
  {
    title: "Software Engineer at Resource",
    description:
      "As a core engineer at a small (10-15 people) startup, I built and iterated on Resource's web app, heavily using React, GraphQL/Apollo, Node.js, and MongoDB. I debugged customer issues, took new features from start to finish (often including design work), and led improv games at our weekly team meetings.",
    image: resource,
    tag: "eng",
    link: "https://www.resource.io/platform/",
  },
  {
    title: "Embedded Code Snippets",
    description:
      "During my internship at GitHub, I worked with 3 other interns to build embedded code snippets for github.com.",
    tag: "eng",
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
      "A piece I reported, produced, edited, and narrated for KPFA's International Women's Day program.",
    tag: "audio",
    image: frisbee,
    link:
      "https://soundcloud.com/michmac202/ultimate-frisbee-exploring-the-pros-and-cons-of-going-pro",
  },
];

export default projects;
