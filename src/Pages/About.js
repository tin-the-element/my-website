import { Component } from "react";
import {motion} from 'framer-motion'
import Title from '../AboutComponents/Title'
import InfoBubble from '../AboutComponents/ InfoBubble'
import "./About.css"
import "../App.css"

class About extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    containerVariants = {
      hidden: {
        y: "50vh",
        opacity: 0,
      },
      visible: {
        y: "0",
        opacity: 1,
        
        transition: { delay: 1.5, duration: 1}
      },
      exit: {
        x: "-100vh",
        opacity: 0, 
        transition: {ease: 'easeInOut', duration: 1, opacity: 0}
      }
    }
    

    render() {
        return (
        <motion.div className={this.props.class}>
            <Title />
            <motion.div className={"AboutDiv"} variants={this.containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
                <InfoBubble  title = {"Past Jobs"} description = {"Technology Chair at UCI Circle K, Assistant Tennis Coach at Vanguard Tennis"}/>
                <InfoBubble  classes = {"bubbleCenter"} title = {"Current Education"} description = {"3rd Year Computer Science Major at the University of California, Irvine"}/>
                <InfoBubble  title = {"Interests"} description = {"Tennis, Watching Soccer and Hockey, Video Games, Working Out"}/>
            </motion.div>
        </motion.div>)
    }
}

export default About;