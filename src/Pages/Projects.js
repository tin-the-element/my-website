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

    render() {
        return (
        <motion.div>
            <h1 className={"ProjectTitle"}>Projects</h1>
            <h3 className={"ProjectDescription"}><a href="https://github.com/tin-the-element">Github</a></h3>
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
        </motion.div>)
    }
}

export default Projects;