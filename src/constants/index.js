import { STL, CodingNinjas, Vcriate } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Technical Writer",
        company_name: "Coding Ninjas",
        icon: CodingNinjas,
        iconBg: "#accbe1",
        date: "October 2022 - December 2022",
        points: [
            "Researched and analyzed industry trends to create engaging written content for a company blog, resulting in a 20% increase in website traffic and a 15% growth in reader engagement metrics.",
            "Crafted compelling narratives by perfecting the flow of information, leading to a 30% increase in reader retention rates and a 25% decrease in bounce rate on blog posts.",
        ],
    },
    {
        title: "Associate",
        company_name: "Vcriate",
        icon: Vcriate,
        iconBg: "#fbc3bc",
        date: "Jan 2023 - March 2023",
        points: [
            "Collaborated with team members to create visually appealing and informative reports, resulting in a 30% increase in audience engagement during client meetings",
            "Utilized data analysis techniques and research to identify key trends and patterns within self-created comprehensive data sets, leading to a 15% improvement in decision-making processes",
        ],
    },
    {
        title: "Research and Analysis Intern",
        company_name: "TPAF(STL)",
        icon: STL,
        iconBg: "#b7e4c7",
        date: "June 2023 - July 2023",
        points: [
            "Implemented a more streamlined process for collecting, organizing, and analyzing customer review data, resulting in a 20% increase in the efficiency and accuracy of data reporting.",
            "Conducted in-depth analysis of data collected from meetings and integrated it with existing datasets, resulting in a comprehensive report with recommendations for improving customer satisfaction levels by 15%",
            "Collaborated directly with the director and head manager to identify patterns and trends within the combined dataset to discover new opportunities for innovation and development that could potentially increase market reach by 10%",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/sharmaanchita',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/anchita-sharmaa/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Apple Ecommerce Webapp',
        description: 'Developed a full-stack ecommerce web application using Next.js , react.js, mongo, tailwind and styled components',
        link: 'https://github.com/sharmaanchita/Apple_Ecommerce_Webpp',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'VacaYay',
        description: 'Designed and built a MERN stack application for booking hotels to stay.',
        link: 'https://github.com/sharmaanchita/VacaYay',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Front end projects',
        description: 'Built a collection of various small and unique front-end projects ',
        link: 'https://github.com/sharmaanchita/front_end_projects',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Ecommerce Application',
        description: 'Developed a MERN stack web application for ecommerce products with admin dashboard and fully functional frontend',
        link: 'https://github.com/sharmaanchita/MERN-stack-Ecommerce-Webapp',
    }
];