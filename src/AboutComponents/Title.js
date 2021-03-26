import { Component } from "react";
import {motion} from 'framer-motion'
import './Title.css'

class Title extends Component {
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
          transition: { type:'tween', duration: 1}
        },
        exit: {
          x: "-100vh",
          opacity: 0, 
          transition: {ease: 'easeInOut', duration: 1, opacity: 0}
        }
      }

    render() {
        return (
        <motion.div  variants={this.containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        >
            <h1>
                Tin Luu
            </h1>
            <h3>
                Student Web Assistant
            </h3>
            <h3 style={{fontWeight:"normal"}}>
                UCI Stem Cell Research Center
            </h3>
        </motion.div>)
    }
}

export default Title;