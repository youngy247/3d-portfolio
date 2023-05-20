import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
        Introduction</p>
        <h2 className={styles.sectionHeadText}
        >Overview.</h2>
      </motion.div>

<motion.p
  variants={fadeIn("", "", 0.1, 1)}
  className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
  >
I am a highly motivated and passionate full stack developer, skilled in TypeScript, JavaScript, PHP, MySQL, and the MERN stack. With a strong foundation in these technologies, I am equipped to build robust and scalable applications.

Driven by my love for learning and innovation, I continuously stay updated with the latest industry trends and best practices. I thrive in dynamic and collaborative environments, where I can utilize my problem-solving abilities to create impactful solutions.

My goal is to deliver user-friendly and efficient applications that solve real-world problems. With a keen eye for detail and a dedication to crafting elegant designs, I strive to create seamless user experiences.

I am excited about the opportunity to contribute to forward-thinking organizations and make a meaningful impact. Let's work together to bring your ideas to life and achieve success in the digital realm.
</motion.p>

    </>
  )
}

export default About