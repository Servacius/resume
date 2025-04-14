import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Joko Liber",
  initials: "JL",
  location: "Jakarta, Indonesia, ID",
  locationLink: "https://maps.app.goo.gl/VS6GkTRte4rH77qX6",
  about:
    "Backend Engineer who architects systems with both technical rigor and user impact in mind.",
  summary: (
    <>
      Backend-Focused Engineer who enjoys building fast, reliable APIs and making databases sing. 
      I specialize in creating scalable services that power great user experiences, 
      with a side of DevOps magic to keep everything running smoothly. 
      Love solving complex problems with simple, maintainable solutions.
    </>
  ),
  avatarUrl: "#",
  personalWebsiteUrl: "https://jokoliber.netlify.app/",
  contact: {
    email: "servacius.liber@gmail.com",
    tel: "+6281995329859",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Servacius",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jokolibersb/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Mercubuana University",
      degree: "Bachelor's Degree in Computer Science",
      start: "2019",
      end: "2021",
    },
    {
      school: "Del Institute of Technology",
      degree: "Associate Degree in Computer Science",
      start: "2014",
      end: "2017",
    },
  ],
  work: [
    {
      company: "Endless Knot",
      link: "#",
      badges: ["Remote", "Laravel", "PostgreSQL", "GitHub", "AWS"],
      title: "Software Engineer",
      start: "2022",
      end: "2023",
      description: (
        <>
          Worked on various projects, including:
          <ul className="list-inside list-disc">
            <li>
            Developed a forum web application and a CMS for Surfvote Web in collaboration with the Polimill team, enhancing content management and user experience.
            </li>
            <li>
            Worked with the GAOGAO team to build two Startup Loan Diagnosis applications, including a CMS. Utilized Laravel, Vue.js, and Next.js to create scalable, efficient, and user-friendly solutions.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Bank Mandiri",
      link: "https://www.bankmandiri.co.id/",
      badges: [
        "Hybrid",
        "Java",
        "CA IAM",
        "SQL",
        "Microsoft AD",
      ],
      title: "Java Software Engineer",
      start: "2021",
      end: "2022",
      description: (
        <>
          Successfully integrating numerous internal application to our core IAM system, improving security measure
          <ul className="list-inside list-disc">
            <li>
            Contributed to the development of an Identity Access Management (IAM) system, integrating internal applications and ensuring seamless authentication and authorization. Maintained IAM services and servers to enhance security, scalability, and system reliability.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Ralali.com",
      link: "https://www.ralali.com/",
      badges: ["On-site", "Golang", "Node.js", "Laravel", "GitHub", "AWS", "SQL"],
      title: "Software Engineer",
      start: "2019",
      end: "2020",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
            Collaborated with designers, QA engineers, and business stakeholders to develop, document, and maintain a robust billing system.
            </li>
            <li>
            Help the development and optimization of internal operational applications using PHP, Golang, and JavaScript, improving efficiency and scalability.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Cartenz Tech",
      link: "https://cartenz.co.id/",
      badges: ["On Site", "C#", "Java", "NodeJs", "SQL", "GitHub", "Laravel", "AWS"],
      title: "Back End Developer",
      start: "2018",
      end: "2019",
      description: (
        <>
          First professional experience as a developer, growing alongside engineering teams while contributing to multiple projects.
          <ul className="list-inside list-disc">
            <li>
            Worked with designers, QA engineers, and business stakeholders to develop, document, and maintain a Smart Government Application utilizing PHP (Laravel Framework) and JavaScript.
            </li>
            <li>
            Managed and optimized legacy systems, including a tax service used in Badung, built with Java (Play Framework) and SQL, ensuring stability and efficiency
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Anabatic",
      link: "https://www.anabatic.com/",
      badges: ["On Site", "Java", "Javascrypt", "Agile", "SQL", "Spring Framework"],
      title: "Software Engineer Internship",
      start: "2017",
      end: "2017",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
            Collaborated with a team to develop a Core Banking Application for interbank transactions using the Spring Framework (Java) for the backend and Angular for the frontend.
            </li>
            <li>
            Conducted research and documentation on high-availability tools to enhance system reliability and performance.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Microsoft",
      link: "https://www.microsoft.com/en-us",
      badges: ["C#", "Azure", "Xamarin", "SQL", "GitHub"],
      title: "Microsoft Student Partner",
      start: "2016",
      end: "2017",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
            Mentored and guide students in technology-related disciplines as part of the MSP program, equipping them with industry-relevant skills beyond traditional academia.
            </li>
            <li>
            Provided training on Microsoft technologies to enhance students' employability and career readiness
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "React/Next.js",
    "Java",
    "Spring",
    "Design Systems",
    "PHP",
    "C#",
    "Laravel",
    "Node.js",
    "Golang",
    "Azure",
    "System Architecture",
    "AWS",
    "PostgreSQL",
    "MySQL",
    "Javascript",
    "Git",
    "GitHub",
  ],
  projects: [
    {
      title: "arch_bytes",
      techStack: ["TypeScript", "Astro Framework", "FastAPI", "Gemini API", "Pyton"],
      description:
        "Bite-sized information and quizzes generator about Software Architecturing, to help me update and refresh my knowledge. This project will be use AI(Gemini AI, for now).",
      link: {
        label: "arch_bytes",
        href: "https://github.com/Servacius/arch_bytes",
      },
    },
    {
      title: "Personal Portfolio v2",
      techStack: ["TypeScript", "Astro Framework", "Tailwind CSS"],
      description:
        "A personal portfolio website to showcase my projects and skills..",
      link: {
        label: "Personal Portfolio v2",
        href: "https://jokoliber.netlify.app/",
      },
    },
    {
      title: "AI Music Recomendation System",
      techStack: ["Gemini API", "Pyton"],
      description:
        "AI Based Music Recommendation System. Use Spotify's API for music data and Gemini AI API for reference recommendations (at first i set it as a mood-based but i change it).",
      link: {
        label: "Personal Portfolio v2",
        href: "https://github.com/Servacius/AI-MR-Sys",
      },
    },
    {
      title: "nodejs_boilerplate",
      techStack: ["Node.js", "Javascript", "Express.js", "PostgreSQL"],
      description:
        "Boilerplate for personal Rest API that using Express.js as the framework that build on top of Node.js.",
      link: {
        label: "nodejs_boilerplate",
        href: "https://github.com/Servacius/nodejs_boilerplate",
      },
    },
  ],
} as const;
