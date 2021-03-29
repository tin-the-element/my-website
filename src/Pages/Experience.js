import { Component } from "react";
import {motion} from 'framer-motion'
import "./Experience.css"
import HorizontalCard from "../ExperienceComponents/HorizontalCard"
import UCI from '../imgs/UCI.png'
import CircleK from '../imgs/CircleK.png'


function Experience(){

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
        <h1 className={"ExperienceTitle"}>EXPERIENCE</h1>
        <motion.div className={"ExperienceDiv"}>
              <HorizontalCard 
              image={UCI}
              position={"Student Web Assistant"} 
              company={"UCI Stem Cell Research Center"} 
              date = {"Feb 2021 - Current"}
              first_bullet={"Overseeing three websites while maintaining and improving the usability of each website"} 
              second_bullet={"Using HTML, CSS, and Javascript to maintain and update the website"}
              third_bullet={"Cooperating with other communication assistants to publicize news and events to people of all ages and professions"}
              />
              <HorizontalCard 
              image={CircleK}
              position={"Technology Chair"} 
              company={"UCI Circle K"} 
              date = {"March 2020 - March 2021"}
              first_bullet={"Managed and improved a website with 300-400 active accounts"} 
              second_bullet={"Oversaw a Technology Internship Program of 16 members to improve the website with a productive learning environment"}
              third_bullet={"Worked with a board of 42 members to run the largest Circle K club in the world"}
              />
          </motion.div>
    </motion.div>)
}

export default Experience;