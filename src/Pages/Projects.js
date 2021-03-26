import { Component } from "react";
import {motion} from 'framer-motion'
import "./Projects.css"
import Card from "../ProjectComponents/Card"
import melloweather3 from '../imgs/melloweather3.png'
import HeizeSongRecommender3 from '../imgs/HeizeSongRecommender3.png'
import UciCircleK1 from '../imgs/UciCircleK1.png'


class Projects extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    containerVariants = {
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

    render() {
        return (
        <motion.div variants={this.containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            >
            <h1 className={"ProjectTitle"}>Projects</h1>
            
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
                description={"Recommends Heize songs based on your inputed songs"} 
                languages={"Python, Tkinter, Spotipy"}
                website={"https://github.com/tin-the-element/Heize-Song-Recommender"}/>
            </motion.div>
            <h3 className={"ProjectDescription"}><a href="https://github.com/tin-the-element">Click Here for More Projects!</a></h3>
        </motion.div>)
    }
}

export default Projects;