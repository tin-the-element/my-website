import { Component } from "react";
import {motion} from 'framer-motion'
import Title from '../AboutComponents/Title'
import InfoBubble from '../AboutComponents/ InfoBubble'
import "./About.css"

class About extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    render() {
        return (
        <motion.div style= {{marginTop:50}}>
            <Title />
            <div className={"AboutDiv"}>
                <InfoBubble  title = {"Past Jobs"} description = {"Technology Chair at UCI Circle K"}/>
                <InfoBubble  classes = {"bubbleCenter"} title = {"Current Education"} description = {"3rd Year at University of California, Irvine"}/>
                <InfoBubble  title = {"Interests"} description = {"Tennis, Watching Soccer and Hockey, Video Games"}/>
            </div>
        </motion.div>)
    }
}

export default About;