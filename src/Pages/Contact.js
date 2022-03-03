import { Component } from "react";
import { motion } from "framer-motion";
import "./Contact.css";
import ContactInfo from "../ContactComponents/ContactInfo";
import linkedin from "../svgs/linkedin.svg";
import linkedin2 from "../svgs/linkedin2.svg";
import github from "../svgs/github.svg";
import github2 from "../svgs/github2.svg";
import googleplus from "../svgs/googleplus.svg";
import googleplus2 from "../svgs/googleplus2.svg";
import download from "../svgs/download.svg";
import download2 from "../svgs/download2.svg";
import instagram from "../svgs/instagram.svg";
import instagram2 from "../svgs/instagram2.svg";
import facebook from "../svgs/facebook.svg";
import facebook2 from "../svgs/facebook2.svg";

function Contact() {
  var containerVariants = {
    hidden: {
      x: "100vh",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: { ease: "easeInOut", duration: 0.7 },
    },
    exit: {
      x: "100vh",
      opacity: 0,
      transition: { ease: "easeInOut", duration: 1, opacity: 0 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h1 className={"ContactTitle"}>CONTACT</h1>
      <div className={"IconRef"}>
        Icons made by{" "}
        <a
          href="https://www.flaticon.com/authors/pixel-buddha"
          title="Pixel Buddha"
        >
          Pixel Buddha
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
      <div className={"Contact"}>
        <ContactInfo
          image={linkedin}
          secImage={linkedin2}
          class="LinkedIn"
          link={"https://www.linkedin.com/in/tin-trung-luu/"}
          text={"linkedin.com/in/tin-trung-luu/"}
        />
        <ContactInfo
          image={github}
          secImage={github2}
          class="Github"
          link={"https://github.com/tin-the-element"}
          text={"https://github.com/tin-the-element"}
        />
        <ContactInfo
          image={googleplus}
          secImage={googleplus2}
          class="Googleplus"
          link={"mailto:trungtin.luu@gmail.com"}
          text={"trungtin.luu@gmail.com"}
        />
        <ContactInfo
          image={download}
          secImage={download2}
          class="Resume"
          link={
            "https://drive.google.com/uc?export=download&id=1EE48mgto7-LWugPkoAmDBcSfHcjoq1AC"
          }
          text={"Download my Resume!"}
        />
        {/* <ContactInfo image={instagram} secImage={instagram2} class="Instagram" link={"https://www.instagram.com/tin_luuna/"} text={"https://www.instagram.com/tin_luuna/"}/>
              <ContactInfo image={facebook} secImage={facebook2} class="Facebook" link={"https://www.facebook.com/tin.luu.925/"} text={"https://www.facebook.com/tin.luu.925/"}/> */}
      </div>
    </motion.div>
  );
}

export default Contact;
