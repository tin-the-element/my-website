import { Component } from "react";
import {motion} from 'framer-motion'
import "./Projects.css"
import Card from "../ProjectComponents/Card"


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
                <Card title={"melloweather"} image={"../imgs/melloweather3"} description={"Creates a Spotify Playlist based on the weather around you"} languages={"React JS, Axios, Framer Motion"}/>
                <Card title={"UCI Circle K Website"} image={"https://i.imgur.com/RcF1rrg.png"} description={"Club Website for the Largest Circle K in the world"} languages={"HTML, CSS, PHP, Javascript, Bootstrap"}/>
                <Card title={"Heize Song Recommender"} image={"https://i.imgur.com/RcF1rrg.png"} description={"Recommends Heize songs based on your inputted songs"} languages={"Python, Tkinter, Spotipy"}/>
            </motion.div>
        </motion.div>)
    }
}

export default Projects;