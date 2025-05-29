// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import aktu from './assets/education_logo/aktu.png';
import up from './assets/education_logo/up_bord.png';
import adca from './assets/education_logo/adca.png';

// Project Section Logo's
import countryfev from './assets/work_logo/countryfev.png';
import negativeCal from './assets/work_logo/negativeCal.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: countryfev,
      role: "Fullstack Developer",
      company: "Country Fev explore",
      date: "Feb 2025 - April 2025",
      desc: "Developed dynamic and scalable web applications using the Java Full stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "SpringBoot",
        "Tailwind CSS",
        "SQL",
        "Redux",
      ],
    },
    {
      id: 1,
      img: negativeCal,
      role: "Fullstack Engineer",
      company: "Agumentik Group of Companies",
      date: "sept 2024 - nov 2024",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: aktu,
      school: "Dr. APJ abdul kalam technical university , Lucknow",
      date: "sept 2022 - present..",
      grade: "8.1 CGPA",
      desc: "I am currently pursuing a Bachelor of Technology (B.Tech) in Information Technology from Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow, and I am in my final year. Throughout my academic journey, I have built a solid foundation in programming, software development, and core computer science concepts. I have successfully completed courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. In addition to academics, I have actively participated in technical workshops, coding events, and hackathons, which have significantly enhanced my practical skills and broadened my understanding of real-world applications. My time at AKTU has played a crucial role in shaping both my technical expertise and professional growth.",
      degree: "Bachelor of Technology (B.Tech) ",
    },

     {
      id: 1,
      img: adca,
      school: "ICC Computer Training Institute , Bhatpar Rani , Deoria",
      date: "Aug 2021 - Aug 2022 ",
      grade: "95%",
      desc: "I have successfully completed the Advanced Diploma in Computer Applications (ADCA) from ICC, Bhatpar Rani. During this course, I gained strong foundational knowledge of computer fundamentals, MS Office (Word, Excel, PowerPoint), internet usage, basic programming, and database management. This diploma helped me build confidence in using computers for both personal and professional tasks.",
      degree: "Advanced Diploma in Computer Applications (ADCA) ",
    },
    {
      id: 2,
      img: up,
      school: "MMM intermediat College Bhatpar Rani , Deoria U.P",
      date: "Sept 2019 - Aug 2021",
      grade: "76.2%",
      desc: "I completed my class 12 education from MMM Intermediat College , Bhatpar Rani ,Deorai  under the UP board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science",
      degree: "UP(XII)- PCM with Computer Science",
    },
  
    {
      id: 3,
      img: up,
      school: "MMM intermediat College Bhatpar Rani , Deoria U.P",
      date: "Sept 2018 - Aug 2019",
      grade: "72.2%",
      desc: "I completed my class 10 education from MMM Intermediat College , Bhatpar Rani ,Deorai  under the UP board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science",
      degree: "UP(X)- PCM with Computer Science",
    },
  
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Explore Fav Country",
      description:
        "A powerful and user-friendly React.js application .",
      image: countryfev,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/ankitojha2026/Find-Country-React-Project",
      webapp: "https://explorefavcountry.netlify.app/",
    },

      {id: 1,
      title: "Negative Marking calculator",
      description:
        "A powerful and user-friendly React.js application .",
      image: negativeCal,
      tags: ["HTML", "CSS", "JavaScript", "React JS"],
      github: "https://github.com/ankitojha2026/Negative-Marking-Calculator",
      webapp: "https://negativemarkingcalculator.netlify.app/",
    },
   
  ]; 