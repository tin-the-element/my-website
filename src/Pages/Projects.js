import { Component } from "react";
import {motion} from 'framer-motion'
import "./Projects.css"
import Card from "../ProjectComponents/Card"
import melloweather3 from '../imgs/melloweather3.png'
import melloweather2 from '../imgs/melloweather2.png'
import melloweather1 from '../imgs/melloweather1.png'
import HeizeSongRecommender3 from '../imgs/HeizeSongRecommender3.png'
import HeizeSongRecommender2 from '../imgs/HeizeSongRecommender2.png'
import HeizeSongRecommender1 from '../imgs/HeizeSongRecommender1.png'
import UciCircleK3 from '../imgs/UciCircleK3.png'
import UciCircleK2 from '../imgs/UciCircleK2.png'
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
          transition: { ease: 'easeInOut', duration: .7}
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

          <div className={"IconRef"}>For more projects visit my  <a href="https://github.com/tin-the-element" title="Pixel Buddha">Github!</a></div>

          <motion.div className={"ProjectsDiv"}>
              <Card 
              title={"melloweather"} 
              image1={melloweather1} 
              image2={melloweather2}
              image3={melloweather3}
              description={"Creates a Spotify Playlist based on the weather around you"} 
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
              website={"https://www.ucicirclek.com"}/>
              <Card title={"Heize Song Recommender"} 
              image1={HeizeSongRecommender1} 
              image2={HeizeSongRecommender2}
              image3={HeizeSongRecommender3}
              description={"Recommends Heize songs based on your inputted songs"} 
              languages={"Python, Tkinter, Spotipy"}
              website={"https://github.com/tin-the-element/Heize-Song-Recommender"}/>

{/* <Card title={"Heize Song Recommender"} 
              image={HeizeSongRecommender3} 
              description={"Recommends Heize songs based on your inputted songs"} 
              languages={"Python, Tkinter, Spotipy"}
              website={"https://github.com/tin-the-element/Heize-Song-Recommender"}/> */}
          </motion.div>
          
      </motion.div>)
}

export default Projects;