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
                <InfoBubble  title = {"Past Jobs"} description = {"Technology Chair at UCI Circle K, Assistant Tennis Coach at Vanguard Tennis"}/>
                <InfoBubble  classes = {"bubbleCenter"} title = {"Current Education"} description = {"3rd Year Computer Science Major at the University of California, Irvine"}/>
                <InfoBubble  title = {"Interests"} description = {"Tennis, Watching Soccer and Hockey, Video Games, Working Out"}/>
            </div>
        </motion.div>)
    }
}

export default About;