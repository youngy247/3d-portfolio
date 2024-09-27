import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import { useEffect, useState } from "react";
import { github, google_play, live } from "../assets";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  isMobile,
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_code_link,
  google_play_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          tiltEnable: window.innerWidth > 768, // Disable on small screens
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl h-[246px] md:h-[375px] max-w-[250px] md:max-w-[320px] "
      >
        <div className="relative w-auto h-[120px] md:h-[180px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-between m-3 card-img_hover">
            {live_code_link && (
              <div
                onClick={() => window.open(live_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={live}
                  alt="Live link"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            )}

            {google_play_link && (
              <div
                onClick={() => window.open(google_play_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={google_play}
                  alt="Google play link"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            )}

            {source_code_link && (
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="github link"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            )}
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-white font-bold text-[14px] md:text-[24px]">
            {name}
          </h3>
          <p className="mt-1 text-secondary text-[12px] md:text-[14px]">
            {description}
          </p>
        </div>

        {!isMobile && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[12px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        )}
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[14px] md:text-[17px] max-w-3x1 leading-[20px] md:leading-[30px]"
        >
          Each project includes a brief description, code links, and live demos,
          showcasing individual and group projects.
        </motion.p>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 justify-center items-center lg:grid-cols-3 gap-7 mx-auto place-items-center">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            isMobile={isMobile}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
