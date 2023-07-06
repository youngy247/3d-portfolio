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
    crosskeys,
    cardiffmet,
    logic,
    wordle,
    jobsearch,
    musicplayer,
    nexus,
    threejs,
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
      title: "Projects"
    },
    {
      id: "learn",
      title: "Learn More"
    },
    {
      id: "form",
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
    {
      title: "BTEC Sport",
      company_name: "Coleg Gwent - Crosskeys Campus",
      icon: crosskeys,
      iconBg: "#383E56",
      date: "September 2017 - July 2019",
      points: [
        "Learnt the principles of sports science, anatomy, physiology, nutrition, and fitness training.",
        "Covered fundamentals of coaching principles and sports psychology.",
        "Analyzed sports performance and applied sports analysis techniques.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "While attending the Coleg Gwent rugby academy gained my first cap for Wales Rugby League at 16",
      ],
    },
    {
      title: "B.Sc. - SCRAM",
      company_name: "Cardiff Metropolitean University",
      icon: cardiffmet,
      iconBg: "#E6DEDD",
      date: "Sept 2019 - July 2022",
      points: [
        
        "Principles of sports conditioning and performance enhancement techniques.",
        "Assessment and analysis of movement patterns and biomechanics.",
        "Application of manual therapy and corrective exercises for injury management.",
        "Gained grant for high scoring mark in year 1",
        "Carried out dissertation in 'Is Bilateral or Unilateral squat better correlated with change of direction speed with university athletes'",
      ],
    },
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
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
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
        "A web application for users in their job search journey. With a sleek React/Bootstrap front-end, it offers a user-friendly interface for exploring and discovering customized job openings tailored to the user.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "RESTfulAPI",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: jobsearch,
      source_code_link: "https://github.com/iO-Academy/23-mar-icantbelieveitsnotmonster",
      live_code_link: "https://23-mar-icantbelieveitsnotmonster.netlify.app/",
    },
    {
      name: "Music Player API",
      description:
        "A RESTful API built in PHP for a pre-existing Music Player front-end. The API provides a wide range of functionalities that enable users to interact with the music player and enhance their music listening experience.",
      tags: [
        {
          name: "PHP",
          color: "blue-text-gradient",
        },
        {
          name: "RESTfulAPI",
          color: "green-text-gradient",
        },
        {
          name: "OOP",
          color: "pink-text-gradient",
        },
      ],
      image: musicplayer,
      source_code_link: "https://github.com/iO-Academy/23-mar-icantbelieveitsnotspotify",
      live_code_link: "https://23-mar-icantbelieveitsnotspotify.netlify.app/",
    },
    {
      name: "Nexus Chatbot",
      description:
        "An AI-powered chatbot inspired by ChatGPT that connects to the OpenAI API currently in beta training to be my personal assistant. Built using JavaScript on the client side and Node.js with Express.js on the server side. ",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "Node",
          color: "green-text-gradient",
        },
        {
          name: "Express",
          color: "pink-text-gradient",
        },
      ],
      image: nexus,
      source_code_link: "https://github.com/youngy247/nexus-bot",
      live_code_link: "https://nexusbot-beta.netlify.app/",
    },
  ];
  
  export { services, technologies, experiences, projects };