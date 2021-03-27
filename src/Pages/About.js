import { Component } from "react";
import {motion} from 'framer-motion'
import Title from '../AboutComponents/Title'
import InfoBubble from '../AboutComponents/ InfoBubble'
import "./About.css"
import "../App.css"

function About() {

  var containerVariants = {
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

    return (
      <motion.div  variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      >
          <h1>
              TIN LUU
          </h1>
          <h3>
              Student Web Assistant
          </h3>
          <h3 style={{fontWeight:"normal"}}>
              UCI Stem Cell Research Center
          </h3>
          <h3 style={{fontWeight:"normal", marginTop:"80px"}}>
              3rd Year Computer Science Student at the University of California, Irvine
          </h3>
      </motion.div>)
}

export default About;