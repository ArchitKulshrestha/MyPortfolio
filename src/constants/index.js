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
  GameHub,
  ExpenseTracker,
  SRCsyn,
  UE5,
  Nextjs,
  ChakraUI,
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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },

  {
    title: "Graphic Designer",
    icon: creator,
  },
  {
    title: "Music Producer",
    icon: mobile,
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
    name: "Next JS",
    icon: Nextjs,
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
    name: "Chakra UI",
    icon: ChakraUI,
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
    name: "git",
    icon: git,
  },
  {
    name: "Unreal Engine 5",
    icon: UE5,
  },

  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Ches SVNIT Surat",
    icon: web,
    iconBg: "#383E56",
    date: "May 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "MERN Stack Developer",
    company_name: "ACM SVNIT Surat",
    icon: web,
    iconBg: "#383E56",
    date: "July 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "MERN Stack Developer",
    company_name: "GDSC SVNIT Surat",
    icon: backend,
    iconBg: "#383E56",
    date: "August 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: backend,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "GameHub",
    description:
      "Web Application to search games and sort them based on ratings, genres,Popularity, platforms, etc.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Axios",
        color: "green-text-gradient",
      },
      {
        name: "ChakraUI",
        color: "pink-text-gradient",
      },
    ],
    link: "https://gamehub-lemon.vercel.app/",
    image: GameHub,
    source_code_link: "https://github.com/ArchitKulshrestha/GameSearchEngine",
  },
  {
    name: "SynergiconSRC2023",
    description:
      "Website for SynergiconSRC2023, annual conference SRC of AIChe hosted by SVNIT Surat.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    link: "https://www.synergiconsrc2023.com/",
    image: SRCsyn,
    source_code_link: "https://github.com/",
  },
  {
    name: "Expense Tracker",
    description:
      "Web Application to add and delete expenses so you can track in which category you spent and how much you spent   .",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "ChakraUI",
        color: "pink-text-gradient",
      },
    ],
    link: "https://tracker-rose-xi.vercel.app/",
    image: ExpenseTracker,
    source_code_link: "https://github.com/ArchitKulshrestha/ExpenseTracker",
  },
];

export { services, technologies, experiences, projects };
