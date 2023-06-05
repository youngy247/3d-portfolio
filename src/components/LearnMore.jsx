import React from 'react'
import { motion } from 'framer-motion'
import { textVariant } from '../utils/motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'

const LearnMore = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
        Ask questions to learn more about me</p>
        <h2 className={styles.sectionHeadText}
        >Learn More.</h2>
      </motion.div>
      <div className="flex items-center justify-center h-screen">
        <iframe
          className="w-5/6 h-3/4"
          src="https://nexusbot-beta.netlify.app/"
          title="W3Schools Free Online Web Tutorials"
        ></iframe>
      </div>
    </>
  )
}

export default SectionWrapper(LearnMore, "learn")
