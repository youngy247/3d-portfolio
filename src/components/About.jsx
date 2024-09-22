import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[225px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col "
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a highly motivated and passionate full stack and mobile developer
        with extensive experience in both the gaming and web development
        industries. I have worked on projects involving game ideation, workflow
        optimization, and mobile app development, as well as dynamic website
        creation with a focus on SEO.
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.2, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        At CMS Gaming, I collaborate closely with design teams to brainstorm
        and implement innovative game ideas, optimized build workflows to
        drastically reduce development time, and ensured seamless gameplay by
        fixing complex bugs. Additionally, I upgrade libraries to enhance
        performance and stability across projects.
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.3, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        As the Lead Mobile Developer at Chain Detective, I spearheaded the
        development of a group expense splitting app from concept to launch,
        working closely with the product team to meet user needs. I also
        contributed to back-end systems, integrating blockchain data to provide
        deep insights for DeFi users.
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.4, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Most recently, I developed a dynamic, scalable website for Supernova
        Dental, focusing on local SEO strategies to boost patient acquisition
        and improve the patient journey. Using Next.js and WordPress as a
        headless CMS, I built an architecture designed for long-term digital
        growth.
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.5, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am excited about leveraging my diverse skill set to contribute to
        innovative projects and deliver high-quality, user-focused applications
        that solve real-world problems. Let's collaborate to bring your ideas to
        life!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
