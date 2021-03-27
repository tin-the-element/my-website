import { Component } from "react";
import {motion} from 'framer-motion'
import "./Projects.css"
import Card from "../ProjectComponents/Card"
import melloweather3 from '../imgs/melloweather3.png'
import HeizeSongRecommender3 from '../imgs/HeizeSongRecommender3.png'
import UciCircleK1 from '../imgs/UciCircleK1.png'
import github from "../svgs/github.svg"
import github2 from "../svgs/github2.svg"


function Projects(){
    var containerVariants = {
        hidden: {
          x: "100vh",
          opacity: 0,
        },
        visible: {
          x: "0",
          opacity: 1,
          transition: { duration: 1}
        },
        exit: {
          x: "-100vh",
          opacity: 0, 
          transition: { ease: 'easeInOut', duration: 1, opacity: 0}
        }
      }

      return (
      <motion.div variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          >
          <h1 className={"ProjectTitle"}>PROJECTS</h1>
          <a href="https://github.com/tin-the-element"><object type="image/svg+xml" aria-label="My Github" data={github} className={"MoreProjects"} style={{pointerEvents:'none'}}></object></a>
          <motion.div className={"ProjectsDiv"}>
              <Card 
              title={"melloweather"} 
              image={melloweather3} 
              description={"Creates a Spotify Playlist based on the weather around you"} 
              languages={"React JS, Axios, Framer Motion"}
              website={"https://melloweather.herokuapp.com"}
              />
              <Card 
              title={"UCI Circle K Website"} 
              image={UciCircleK1} 
              description={"Club Website for the Largest Circle K in the world"} 
              languages={"HTML, CSS, PHP, Javascript, Bootstrap"}
              website={"https://www.ucicirclek.com"}/>
              <Card title={"Heize Song Recommender"} 
              image={HeizeSongRecommender3} 
              description={"Recommends Heize songs based on your inputted songs"} 
              languages={"Python, Tkinter, Spotipy"}
              website={"https://github.com/tin-the-element/Heize-Song-Recommender"}/>
          </motion.div>
          
      </motion.div>)
}

export default Projects;