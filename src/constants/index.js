import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    io,
    starbucks,
    cardiffmet,
    logic,
    wordle,
    jobsearch,
    musicplayer,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "SCRAM Graduate",
      icon: backend,
    },
    {
      title: "Transport Planner",
      icon: mobile,
    },
    {
      title: "IO Graduate",
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
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Bsc - SCRAM",
      company_name: "Cardiff Metropolitean University",
      icon: cardiffmet,
      iconBg: "#E6DEDD",
      date: "Sept 2019 - July 2022",
      points: [
        
        "Studied Strength, Conditioning And Massage for 3 years at Cardiff Met",
        "Gained so and so qualifications",
        "Gained grant for high scoring marks in year 1",
        "Studied dissertation in 'Is Bilateral or Unilateral squat better correlated with change of direction speed with university athletes'",
      ],
    },
    {
      title: "Transport Planner",
      company_name: "Logic Freight",
      icon: logic,
      iconBg: "#383E56",
      date: "July 2022 - March 2023",
      points: [
        "Proficient in computer and telephone systems including: Stirling transport system and Sage accounts.",
        "Organised paperwork in paper audit trail and electronic filing systems using scanner.",
      ],
    },
    {
      title: "Full Stack Track",
      company_name: "IO Academy",
      icon: io,
      iconBg: "#E6DEDD",
      date: "March 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborated seamlessly with cross-functional teams, including designers, product managers, and fellow developers, to create high-quality products that not only met but surpassed client expectations.",
        "Implemented responsive design techniques, ensuring a seamless user experience across various devices and screen sizes, while ensuring cross-browser compatibility to maximize accessibility.",
        "Actively participated in code reviews, providing constructive feedback and implementing improvements that elevated the overall quality of the codebase, leading to enhanced client satisfaction and project success.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Wordle Clone",
      description:
        "Responsive wordle game in vanilla JavaScript. Players guess hidden words with adaptive UI for enjoyable gaming on any device. Intuitive gameplay and appealing design create engaging experience for all.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: wordle,
      source_code_link: "https://github.com/iO-Academy/2023-mar-wordle",
      live_code_link: "https://23-mar-wordgame.dev.io-academy.uk/",
    },
    {
      name: "Job Search React App",
      description:
        "Web application that enables users to search for job openings, view salaries for positions, and locate available jobs based on their job type.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: jobsearch,
      source_code_link: "https://github.com/iO-Academy/23-mar-icantbelieveitsnotmonster",
      live_code_link: "https://23-mar-wordgame.dev.io-academy.uk/",
    },
    {
      name: "Music Player API",
      description:
        "A rest API built in PHP for a pre-exisiting Music Player front-end. The API provides a wide range of functionalities that enable users to interact with the music player and enhance their music listening experience.",
      tags: [
        {
          name: "php",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
      ],
      image: musicplayer,
      source_code_link: "https://github.com/iO-Academy/23-mar-icantbelieveitsnotspotify",
      live_code_link: "https://23-mar-wordgame.dev.io-academy.uk/",
    },
  ];
  
  export { services, technologies, experiences, projects };