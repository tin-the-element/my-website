import { Component } from "react";
import {motion} from 'framer-motion'
import "./Experience.css"
import HorizontalCard from "../ExperienceComponents/HorizontalCard"
import UCIStemCell from '../imgs/UCIStemCell.png'
import CircleK from '../imgs/CircleK.png'
import Zotbins from '../imgs/Zotbins.png'
import { useState } from "react";

function Experience(){

  const [pagination, setPagination] = useState(1)

  function pageOne() {
    setPagination(1)
    document.getElementById("one").classList.remove("pagination_block")
    document.getElementById("one").classList.add("pagination_block_disabled")

    document.getElementById("two").classList.add("pagination_block")
    document.getElementById("two").classList.remove("pagination_block_disabled")

  }

  function pageTwo() {
    setPagination(2)
    document.getElementById("two").classList.remove("pagination_block")
    document.getElementById("two").classList.add("pagination_block_disabled")

    document.getElementById("one").classList.add("pagination_block")
    document.getElementById("one").classList.remove("pagination_block_disabled")
  }

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
      {pagination === 1 ? 
      <motion.div className={"ExperienceDiv"}>
          <HorizontalCard 
          image={Zotbins}
          position={"Mobile Developer"} 
          company={"Zotbins"} 
          date = {"March 2021 - Current"}
          first_bullet={"Worked on a mobile app to help users learn about environmentally-conscious practices"} 
          second_bullet={"Created and redesigned parts of the app using React Native, Expo, and CSS"}
          third_bullet={"Cooperated with other developers and designers to foster new ideas and improve the app’s user experience"}
          />
          <HorizontalCard 
          image={UCIStemCell}
          position={"Student Web Assistant"} 
          company={"UCI Stem Cell Research Center"} 
          date = {"Feburary 2021 - September 2021"}
          first_bullet={"Overseeing three websites while maintaining and improving the usability of each website"} 
          second_bullet={"Using HTML, CSS, and Javascript to maintain and update the website"}
          third_bullet={"Cooperating with other communication assistants to publicize news and events to people of all ages and professions"}
          />
          
      </motion.div> : 
      <motion.div className={"ExperienceDiv"}>
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
      }

      <div className="paginationExperience">
        <div id="one" onClick={() => pageOne()} className="pagination_block_disabled"><p className="pagination_q">&lsaquo;</p></div>
        <div id="two" onClick={() => pageTwo()} className="pagination_block"><p className="pagination_q">&rsaquo;</p></div>
      </div>
  </motion.div>)
}

export default Experience;