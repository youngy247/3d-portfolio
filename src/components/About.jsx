import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
     >
     <div
     options={{
      max: 45,
      scale: 1,
      speed: 450
     }}
     className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col "
     >
      <img src={icon} alt={title} className="w-16 h-16 object-contain" />
      <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
     </div>


    </motion.div>
    
    </Tilt>
  )
}

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

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} / >
        ))}
      </div>
    </>
  )
}

export default About