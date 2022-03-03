import { Component, useEffect } from "react";
import { motion } from "framer-motion";
import "./Projects.css";
import Card from "../ProjectComponents/Card";

import PokemonIRL3 from "../imgs/PokemonIRL3.png";
import PokemonIRL2 from "../imgs/PokemonIRL2.png";
import PokemonIRL1 from "../imgs/PokemonIRL1.png";
import melloweather3 from "../imgs/melloweather3.png";
import melloweather2 from "../imgs/melloweather2.png";
import melloweather1 from "../imgs/melloweather1.png";
import HeizeSongRecommender3 from "../imgs/HeizeSongRecommender3.png";
import HeizeSongRecommender2 from "../imgs/HeizeSongRecommender2.png";
import HeizeSongRecommender1 from "../imgs/HeizeSongRecommender1.png";
import UciCircleK3 from "../imgs/UciCircleK3.png";
import UciCircleK2 from "../imgs/UciCircleK2.png";
import UciCircleK1 from "../imgs/UciCircleK1.png";
import { useState } from "react";

import github from "../svgs/github.svg";
import github2 from "../svgs/github2.svg";

function Projects() {
  const [pagination, setPagination] = useState(1);

  function pageOne() {
    setPagination(1);
    document.getElementById("one").classList.remove("pagination_block");
    document.getElementById("one").classList.add("pagination_block_disabled");

    document.getElementById("two").classList.add("pagination_block");
    document
      .getElementById("two")
      .classList.remove("pagination_block_disabled");
  }

  function pageTwo() {
    setPagination(2);
    document.getElementById("two").classList.remove("pagination_block");
    document.getElementById("two").classList.add("pagination_block_disabled");

    document.getElementById("one").classList.add("pagination_block");
    document
      .getElementById("one")
      .classList.remove("pagination_block_disabled");
  }

  useEffect(() => {});
  var containerVariants = {
    hidden: {
      x: "100vh",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: { ease: "easeInOut", duration: 0.7 },
    },
    exit: {
      x: "-100vh",
      opacity: 0,
      transition: { ease: "easeInOut", duration: 1, opacity: 0 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h1 className={"ProjectTitle"}>PROJECTS</h1>
      {/* <div className={"IconRef"}>Hover a card for more information!</div> */}
      <div className={"IconRef"}>
        For more projects visit my{" "}
        <a href="https://github.com/tin-the-element" title="Pixel Buddha">
          Github!
        </a>
      </div>
      {pagination === 1 ? (
        <motion.div className={"ProjectsDiv"}>
          <Card
            title={"Pokemon IRL"}
            image1={PokemonIRL1}
            image2={PokemonIRL2}
            image3={PokemonIRL3}
            description={
              "Pokemon game where you can adopt Pokemon to complete real-world like tasks"
            }
            languages={"React JS, HTML, Sass, GraphQL, AWS Appsync"}
            website={"https://melloweather.herokuapp.com"}
          />
          <Card
            title={"melloweather"}
            image1={melloweather1}
            image2={melloweather2}
            image3={melloweather3}
            description={
              "Creates a Spotify Playlist based on the weather around you"
            }
            languages={"React JS, Axios, Framer Motion"}
            website={"https://melloweather.herokuapp.com"}
          />
          <Card
            title={"UCI Circle K Website"}
            image1={UciCircleK1}
            image2={UciCircleK2}
            image3={UciCircleK3}
            description={"Club Website for the Largest Circle K in the world"}
            languages={"HTML, CSS, PHP, Javascript, Bootstrap"}
            website={"https://www.ucicirclek.com"}
          />

          {/* <Card title={"Heize Song Recommender"} 
              image={HeizeSongRecommender3} 
              description={"Recommends Heize songs based on your inputted songs"} 
              languages={"Python, Tkinter, Spotipy"}
              website={"https://github.com/tin-the-element/Heize-Song-Recommender"}/> */}
        </motion.div>
      ) : (
        <motion.div className={"ProjectsDiv"}>
          <Card
            title={"Heize Song Recommender"}
            image1={HeizeSongRecommender1}
            image2={HeizeSongRecommender2}
            image3={HeizeSongRecommender3}
            description={"Recommends Heize songs based on your inputted songs"}
            languages={"Python, Tkinter, Spotipy"}
            website={
              "https://github.com/tin-the-element/Heize-Song-Recommender"
            }
          />

          {/* <Card title={"Heize Song Recommender"} 
            image={HeizeSongRecommender3} 
            description={"Recommends Heize songs based on your inputted songs"} 
            languages={"Python, Tkinter, Spotipy"}
            website={"https://github.com/tin-the-element/Heize-Song-Recommender"}/> */}
        </motion.div>
      )}
      <div className="pagination">
        <div
          id="one"
          onClick={() => pageOne()}
          className="pagination_block_disabled"
        >
          <p className="pagination_q">&lsaquo;</p>
        </div>
        <div id="two" onClick={() => pageTwo()} className="pagination_block">
          <p className="pagination_q">&rsaquo;</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;
