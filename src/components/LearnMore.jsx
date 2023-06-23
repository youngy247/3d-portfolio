import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { textVariant } from '../utils/motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'

const LearnMore = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change',handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener('change',handleMediaQueryChange);
    };
  }, []);

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
          id="nexus-iframe"
          className={isMobile ? 'w-full h-3/4' : 'w-5/6 h-3/4'}
          src="https://nexusbot-beta.netlify.app/"
          title="Adam's personal assistant chatbot Nexus"
        ></iframe>
      </div>
    </>
  )
}

export default SectionWrapper(LearnMore, "learn")
