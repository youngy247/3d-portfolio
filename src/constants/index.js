import {
  backend,
  cardiffmet,
  cd,
  chaindetective,
  cms_logo,
  creator,
  crosskeys,
  css,
  docker,
  figma,
  git,
  html,
  insectinspect,
  io,
  javascript,
  jobsearch,
  logic,
  mobile,
  mongodb,
  musicplayer,
  nexus,
  nodejs,
  reactjs,
  redux,
  supernova_logo,
  tailwind,
  threejs,
  typescript,
  web,
  wordle,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Overview",
  },
  {
    id: "work",
    title: "My Journey",
  },
  {
    id: "projects",
    title: "Projects",
  },
  // {
  //   id: "learn",
  //   title: "Learn More",
  // },
  {
    id: "form",
    title: "Contact",
  },
];

const services = [
  {
    title: "Mobile Developer",
    icon: backend,
  },
  {
    title: "Games Developer",
    icon: mobile,
  },
  {
    title: "iO Graduate",
    icon: creator,
  },
  {
    title: "Web Developer",
    icon: web,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  // {
  //   title: "BTEC Sport",
  //   company_name: "Coleg Gwent - Crosskeys Campus",
  //   icon: crosskeys,
  //   iconBg: "#383E56",
  //   date: "September 2017 - July 2019",
  //   points: [
  //     "Learnt the principles of sports science, anatomy, physiology, nutrition, and fitness training.",
  //     "Covered fundamentals of coaching principles and sports psychology.",
  //     "Analyzed sports performance and applied sports analysis techniques.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //     "While attending the Coleg Gwent rugby academy gained my first cap for Wales Rugby League at 16",
  //   ],
  // },
  // {
  //   title: "B.Sc. - SCRAM",
  //   company_name: "Cardiff Metropolitean University",
  //   icon: cardiffmet,
  //   iconBg: "#E6DEDD",
  //   date: "Sept 2019 - July 2022",
  //   points: [
  //     "Principles of sports conditioning and performance enhancement techniques.",
  //     "Assessment and analysis of movement patterns and biomechanics.",
  //     "Application of manual therapy and corrective exercises for injury management.",
  //     "Gained grant for high scoring mark in year 1",
  //     "Carried out dissertation in 'Is Bilateral or Unilateral squat better correlated with change of direction speed with university athletes'",
  //   ],
  // },
  {
    title: "Transport Planner",
    company_name: "Logic Freight",
    icon: logic,
    iconBg: "#383E56",
    date: "July 2022 - March 2023",
    points: [
      "Utilizing transportation management systems to plan and schedule delivery routes for goods and products.",
      "Addressing any potential issues or disruptions in transportation, such as traffic delays or unforeseen circumstances, by implementing contingency plans and making real-time adjustments.",
      "Identifying areas for process improvement and implementing strategies to enhance efficiency and cost-effectiveness.",
      "Maintaining strong relationships with carriers, negotiating contracts, and managing service level agreements.",
    ],
  },
  {
    title: "Full Stack Track",
    company_name: "iO Academy",
    icon: io,
    iconBg: "#E6DEDD",
    date: "March 2023 - June 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborated seamlessly with cross-functional teams, including designers, product managers, and fellow developers, to create high-quality products that not only met but surpassed client expectations.",
      "Implemented responsive design techniques, ensuring a seamless user experience across various devices and screen sizes, while ensuring cross-browser compatibility to maximize accessibility.",
      "Actively participated in code reviews, providing constructive feedback and implementing improvements that elevated the overall quality of the codebase, leading to enhanced client satisfaction and project success.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Chain Detective",
    icon: cd,
    iconBg: "#383E56",
    date: "June 2023 - December 2023",
    points: [
      "Lead mobile app development, enhancing user experience and performance.",
      "Play a key role in front-end and back-end, integrating UI with data processes.",
      "Utilise Ethereum node and Uniswap data for platform capabilities to provide detailed insights for DeFi users.",
      "Engage in daily meetings and code reviews, maintaining product quality and promoting team cohesion.",
    ],
  },
  {
    title: "Online Games Developer",
    company_name: "CMS Gaming",
    icon: cms_logo,
    iconBg: "#383E56",
    date: "December 2023 - Present",
    points: [
      "Game Ideation: Collaborating with the design team to brainstorm and develop new game ideas, including main game effects and bonus games.",
      "Workflow Optimisation: Implementing improvements in the development workflow, notably enhancing the client build process, reducing build times during development by a factor of 10.",
      "Bug Fixing: Diagnosing and resolving complex issues to ensure a seamless gaming experience.",
      "Library Upgrades: Upgrading libraries to new versions to leverage the latest features and performance enhancements.",
      "Solo Development: Designing and developing a group expense splitting mobile app independently, taking full responsibility for its implementation and performance.",
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "Supernova Dental",
    icon: supernova_logo,
    iconBg: "#383E56",
    date: "Contract - Q4 2024 Launch",
    points: [
      "Developed a dynamic website for Supernova Dental, a new dental practice, using Next.js, targeting local SEO to drive patient acquisition from day one with a scalable, future-proof architecture designed to support the practice’s long-term digital growth.",
      "Set the foundation for an enhanced patient journey and improved conversion potential by implementing well-structured calls to action, internal linking strategies, and engaging animations using Framer Motion.",
      "Integrated WordPress as a headless CMS for seamless management of blog and gallery content, enabling efficient updates for the client.",
    ],
  },
];

const projects = [
  {
    name: "Wordle Clone",
    description:
      "A responsive Wordle game in vanilla JavaScript with an adaptive UI for all devices.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
    ],
    image: wordle,
    source_code_link: "https://github.com/iO-Academy/2023-mar-wordle",
    live_code_link: "https://23-mar-wordgame.dev.io-academy.uk/",
  },
  {
    name: "Job Search App",
    description:
      "React/Bootstrap front-end and customized job listings.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "RESTfulAPI", color: "green-text-gradient" },
      { name: "Bootstrap", color: "pink-text-gradient" },
    ],
    image: jobsearch,
    source_code_link:
      "https://github.com/iO-Academy/23-mar-icantbelieveitsnotmonster",
  },
  {
    name: "Music Player API",
    description:
      "A PHP-built RESTful API for a music player, enhancing user interaction.",
    tags: [
      { name: "PHP", color: "blue-text-gradient" },
      { name: "RESTfulAPI", color: "green-text-gradient" },
      { name: "OOP", color: "pink-text-gradient" },
    ],
    image: musicplayer,
    source_code_link:
      "https://github.com/iO-Academy/23-mar-icantbelieveitsnotspotify",
  },
  {
    name: "Nexus Chatbot",
    description:
      "An AI chatbot powered by OpenAI, showcasing skills, projects, and experiences.",
    tags: [
      { name: "JavaScript", color: "blue-text-gradient" },
      { name: "Node", color: "green-text-gradient" },
      { name: "Express", color: "pink-text-gradient" },
    ],
    image: nexus,
    source_code_link: "https://github.com/youngy247/nexus-bot",
  },
  {
    name: "InsectInspect",
    description:
      "A cross-platform app using APIs for species detection and Firebase for data.",
    tags: [
      { name: "Ionic", color: "blue-text-gradient" },
      { name: "Capacitor", color: "green-text-gradient" },
      { name: "Firebase", color: "pink-text-gradient" },
    ],
    image: insectinspect,
    source_code_link: "https://github.com/youngy247/ionic-capacitor-tutorial",
    live_code_link: "https://insectinspect.netlify.app/",
  },
  {
    name: "Chain Detective",
    description:
      "Led mobile development for an analytics platform, indexing Uniswap trade events.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "React Native", color: "green-text-gradient" },
      { name: "Ethereum", color: "pink-text-gradient" },
    ],
    image: chaindetective,
    live_code_link: "https://chain-detective.com",
    google_play_link:
      "https://play.google.com/store/apps/details?id=com.youngy247.chaindetectivemobile",
  },
];

export { experiences, projects, services, technologies };
