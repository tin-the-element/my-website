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

    containerVariants = {
        hidden: {
          x: "-100vh",
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
            <Title />
            <motion.div className={"AboutDiv"}>
                <InfoBubble  title = {"Past Jobs"} description = {"Technology Chair at UCI Circle K, Assistant Tennis Coach at Vanguard Tennis"}/>
                <InfoBubble  classes = {"bubbleCenter"} title = {"Current Education"} description = {"3rd Year Computer Science Major at the University of California, Irvine"}/>
                <InfoBubble  title = {"Interests"} description = {"Tennis, Watching Soccer and Hockey, Video Games, Working Out"}/>
            </motion.div>
        </motion.div>)
    }
}

export default About;