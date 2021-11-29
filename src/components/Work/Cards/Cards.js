import React from "react";
import Card from "./Card/Card";
import "./Cards.scss";
import sonicImage from "./Images/sonic.png";
import portfolioImage from "./Images/portfolio.png";
import cafeImage from "./Images/cafe.jpeg";
import chessImage from "./Images/chess.jpg";
import tomatoImage from "./Images/tomatoes.jpg";

import FlipMove from "react-flip-move";

// projects
// portfolio (Web, React)
// rebbit (Web, Express)
// maxgram (Web, React, Express)
// 3d architecture (3D)
// sonic ai (Python)
// PomoMagic (Web, React)
// URL Shortener
// Quote Generator
// c cgol (Systems, C)
// pcb project (Systems, C)
// TODO: compiler (Systems, Python)
// ZabarkaOS (Systems, C, Assembly)
// Artstation

// categories
// Web
// 3D
// Systems
// React
// Express
// Python
// C
// Assembly
// MongoDB

const CARD_DATA = [
  {
    title: "My Portfolio Website",
    tags: ["Web", "React"],
    image: portfolioImage,
    description:
      "A high performance and responsive website. The same one you're using right now!",
    demo: "https://maxzabarka.github.io/portfolio/",
    github: "https://github.com/maxzabarka/portfolio",
  },
  {
    title: "MaxGram",
    tags: ["Web", "React", "Express", "MongoDB"],
    image: portfolioImage,
    description: "Clone of a certain social media made using MERN stack",
  },
  {
    title: "Architectural 3D Scenes",
    tags: ["3D"],
    image: cafeImage,
    description:
      "A collection of 3D scenes I created for a client working on a short film.",
  },
  {
    title: "My 3D Portfolio",
    tags: ["3D"],
    image: chessImage,
    description: "My 3D graphics portfolio",
    demo: "https://www.artstation.com/maxzabarka",
  },
  {
    image: sonicImage,
    description:
      "An artificial intellegence model that can beat the first few levels of Genesis Sonic",
    title: "Sonic AI",
    tags: ["Python"],
  },
  {
    title: "PomoMagic",
    tags: ["Web", "React"],
    image: tomatoImage,
    description:
      "A lightweight, interactive and customizable tomato timer website",
    demo: "https://maxzabarka.github.io/tomato-timer/",
    github: "https://github.com/MaxZabarka/tomato-timer",
  },
  {
    title: "URL Shortener",
    tags: ["Web", "Express"],
    image: portfolioImage,
    description: "A URL shortener built using NodeJS, Express, and mySQL",
  },
  {
    title: "Quote Generator",
    tags: ["Web"],
    image: portfolioImage,
    description:
      "A stylish and lightweight meaningful quote generator built with vanilla JavaScript and CSS",
  },
  {
    title: "Conways Game of Life",
    tags: ["C"],
    image: portfolioImage,
    description: "Cellular automaton written in C with NCURSES",
  },
  {
    title: "PCB Business Cards",
    tags: ["C", "Systems"],
    image: portfolioImage,
    description:
      "A printed circuit board with a microcontroller and LED display, doubling as a business card!",
  },
  {
    title: "C Compiler",
    tags: ["C", "Systems", "Assembly"],
    image: portfolioImage,
    description: "My own implementation of C",
  },
  {
    title: "FooBarOS",
    tags: ["C", "Systems", "Assembly"],
    image: portfolioImage,
    description: "A learning project 32-bit barebones operating system",
  },
];

const Cards = (props) => {
  return (
    <div className="Cards">
      <FlipMove className="grid">
        {CARD_DATA.map((card) => {
          let shouldRender = false;
          for (const tag of card.tags) {
            shouldRender = props.selectedTags.has(tag);
            if (props.selectedTags.has(tag) === true) {
              break;
            }
          }
          if (shouldRender) {
            return <Card key={card.title} {...card} />;
          } else {
            return null;
          }
        })}
      </FlipMove>
    </div>
  );
};

export default Cards;
