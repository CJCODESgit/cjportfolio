import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring, 0.5 * index, 0.75 ")}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>

      <motion.p
        variants={fadeIn("","", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I&apos;m a skilled and passionate web developer with experience in Javascript, React, Python, jupyter and
        expertise in web3, machine learning, data analysis, the
        Microsoft Office suite, and social media management, as
        well as a talent for data analysis and proficiency in the
        Microsoft Office suite.
        I&apos;m motivated, dedicated, a quick learner and collaborate closely with clients to create solutions and eager to bring my skills and passion to a new role.
    </motion.p>

    <div className="mt-20 flex flex-wrap gap-10">
      {services.map ((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
    </>
  )
}

export default About