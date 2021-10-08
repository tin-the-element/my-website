import { Component } from "react";
import {motion} from 'framer-motion'
import Me from '../imgs/Me.jpg'
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
      transition: { ease: 'easeInOut', duration: .7}
    },
    exit: {
      x: "-100vh",
      opacity: 0, 
      transition: {ease: 'easeInOut', duration: .85, opacity: 0}
    }
  }

    return (
      <motion.div  variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      >
        <h1 className={"AboutTitle"}>ABOUT</h1>
        <div className="AboutDiv">
          
            <div className="personal_blurb">
              <img className='personal_image' alt="Tin Luu" src={Me}></img>
              <div className="basic_info">
                <p className="basic_info_text">Hello, my name is Tin Luu, and I'm a 4th Year Computer Science Major at the University of California, Irvine.</p>
                <p className="basic_info_text">
                  In the computer science industry, my main interests are in Web Developement and Mobile Developement. I enjoy working on projects that 
                  can make a positive impact in the world and on my skills as a software developer. I am constantly working on new projects to learn more
                  technologies and to grow as a developer. 
                </p>
                <p className="basic_info_text">
                Thank you for taking the time to look around my website!
                </p>
                {/* <div className="info_bubble">
                  <h3>Basic Info</h3>
                  <p>Name: Tin Luu</p>
                  <p>Year: 4th Year</p>
                  <p>Major: Computer Science</p>
                  <p>School: University of California, Irvine</p>
                </div>
                <div className="info_bubble">
                  <h3>Computer Science Interests</h3>
                  <p>Web App Development and Mobile App Developement</p>
                </div>
                <div className="info_bubble">
                  <h3>Most Known Langauges</h3>
                  <p>React, React Native, HTML, CSS, Javascript, Python</p>
                </div> */}
              </div>

            </div>
            {/* <div className="personal_blurb">

            <img className='personal_image' alt="Tin Luu" src={Me}></img>  

            <h3 className="personal_text">
              Hello, my name is Tin Luu and I am a 4th year Computer Science major at the University of California, Irvine.
              I'm currently looking for a Software Engineer Internship/Full Time position, and my main interests are web development and mobile app development.
            </h3>
            {/* <h3>
                Student Web Assistant
            </h3>
            <h3 style={{fontWeight:"normal"}}>
                UCI Stem Cell Research Center
            </h3>
            <h3 style={{fontWeight:"normal", marginTop:"80px"}}>
                4th Year Computer Science Student at the University of California, Irvine
            </h3> */}
            {/* </div> */} 
          </div>
      </motion.div>)
}

export default About;