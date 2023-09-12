import { useEffect } from "react";
import { Link } from "react-router-dom";

import {
  addCollectionAndDocuments,
  getCategoriesAndDoc,
} from "../../utils/firebase/Firebase";
import Button from "../../components/button/Button";

import styles from "./Home.module.css";
// const resume = [
//   {
//     title: "about",
//     info: [
//       "With over 4 years of experience, I am dedicated to solving complex      problems and enhancing user experiences through the proficient utilization of the latest front-end web technologies and collaborative full-stack architecture discussions.",

//       "I successfully led the transition from the Ant Design UI library to       the Material UI library, resulting in improved client satisfaction,   streamlined development processes, enhanced customization and      flexibility of forms and inputs, and faster page loading times.",

//       "I have experience in integrating various APIs, including Google Maps  for navigation and Twilio for telephony.",

//       " I also executed a seamless migration from Rest API architecture to    GraphQL, significantly improving development efficiency, codegeneration, and operational speed.",

//       "I thrive in a positive work environment and actively contribute to the onboarding of new team members.",
//     ],
//   },
//   {
//     title: "experience",
//     info: [
//       {
//         title: "React developer",
//         companyName: "TechnoPointer",
//         location: "San Francisco, CA",
//         description: [
//           "Led the development of a groundbreaking platform that facilitates collaboration between dental clinics and laboratories",
//           "Designed and implemented role-based permissions to define and regulate application usage, ensuring controlled access and tailored functionality for various user roles",
//           "Developed and coded web applications for customer accounts of the dentist clinic, including diagnosing root cause problems, debugging issues, and identifying solutions",
//           "Utilized Redux for enhanced application state management, leveraging its debugging capabilities to streamline the development process",
//           "Engineered an intuitive interface using the latest React capabilities for the management of patient cards, including tasks such as addition, updating, and deletion, enhancing the overall user experience",
//           "Integrated Axios, a promise-based library, to seamlessly retrieve data from REST endpoints, enhancing data accessibility and enriching the application's functionality",
//           "Designed client-side Form Validation for registration forms, ensuring data accuracy and integrity",
//           "Worked closely with a team on front-end design changes that boosted organic web traffic by an impressive 10%",
//           "Demonstrated a commitment to delivering high-quality work in a timely and efficient manner using the Scrum methodology to manage and develop solutions on multiple projects",
//           "Used GIT for version control",
//         ],
//         date: "07/2022 - current",
//       },
//       {
//         title: "Software Developer",
//         companyName: "TechnoPointer",
//         location: "San Francisco, CA",
//         description: [
//           "Led the development of a groundbreaking platform that facilitates collaboration between dental clinics and laboratories",
//           "Designed and implemented role-based permissions to define and regulate application usage, ensuring controlled access and tailored functionality for various user roles",
//           "Developed and coded web applications for customer accounts of the dentist clinic, including diagnosing root cause problems, debugging issues, and identifying solutions",
//           "Utilized Redux for enhanced application state management, leveraging its debugging capabilities to streamline the development process",
//           "Engineered an intuitive interface using the latest React capabilities for the management of patient cards, including tasks such as addition, updating, and deletion, enhancing the overall user experience",
//           "Integrated Axios, a promise-based library, to seamlessly retrieve data from REST endpoints, enhancing data accessibility and enriching the application's functionality",
//           "Designed client-side Form Validation for registration forms, ensuring data accuracy and integrity",
//           "Worked closely with a team on front-end design changes that boosted organic web traffic by an impressive 10%",
//           "Demonstrated a commitment to delivering high-quality work in a timely and efficient manner using the Scrum methodology to manage and develop solutions on multiple projects",
//           "Used GIT for version control",
//         ],
//         date: "08/2019 – 07/2022",
//       },
//       {
//         title: "University economics professor",
//         companyName: "National Technical University",
//         location: "Kharkiv, Ukraine",
//         date: "08/2014 – 07/2018",
//       },
//     ],
//   },
//   {
//     title: "skills",
//     info: {
//       skillsName: [
//         {
//           skill: "Javascript",
//           range: 90,
//           color: "yellow",
//         },
//         {
//           skill: "Typescript",
//           range: 75,
//           color: "blue",
//         },
//         {
//           skill: "React",
//           range: 80,
//           color: "cornflowerblue",
//         },
//         {
//           skill: "Redux",
//           range: 85,
//           color: "violet",
//         },
//         {
//           skill: "Mongo",
//           range: 70,
//           color: "green",
//         },
//         {
//           skill: "GraphQL",
//           range: 65,
//           color: "pink",
//         },
//         {
//           skill: "NodeJS",
//           range: 65,
//           color: "darkgreen",
//         },
//         {
//           skill: "CSS",
//           range: 75,
//           color: "darkblue",
//         },
//         {
//           skill: "HTML",
//           range: 85,
//           color: "darkred",
//         },

//         {
//           skill: "GIT",
//           range: 85,
//           color: "lilac",
//         },
//       ],
//       skillsInfo: [
//         "I possess a range of technical skills in the field of web development,  including proficiency in programming languages such as JavaScript and TypeScript.",
//         "I am well-versed in popular tools and technologies like React, Redux, Redux Toolkit, Redux-Saga, Jest, React testing library, GIT, HTML,      CSS, SASS/SCSS, styled-components, Material UI, REST, GraphQL, Formik,      react hook form, and yup. Additionally, I have experience working with databases, specifically MongoDB.",
//       ],
//     },
//   },
//   {
//     title: "education",
//     info: [
//       {
//         university:
//           'National Technical University "Kharkiv Polytechnic Institute"',
//         years: "2002-2006",
//         diploma: "Bachelor's degree",
//         href: "https://www.kpi.kharkov.ua/eng/",
//         img: { src: "/assets/cropped-logo.png", alt: "logo" },
//         type: "education",
//       },
//       {
//         university:
//           'National Technical University "Kharkiv Polytechnic Institute"',
//         years: "2006-2008",
//         diploma: "Master's degree",
//         href: "https://www.kpi.kharkov.ua/eng/",
//         img: { src: "/assets/cropped-logo.png", alt: "logo" },
//         type: "education",
//       },
//     ],
//   },
//   {
//     title: "contacts",
//     info: [
//       {
//         text: "katatimofeeva82@gmail.com",
//         type: "email",
//         href: "mailto:katatimofeeva82@gmail.com",
//       },
//       {
//         text: "Santa Rosa Bay Area, California",
//         type: "map",
//         href: "https://www.google.com/maps/place/%D0%A1%D0%B0%D0%BD%D1%82%D0%B0-%D0%A0%D0%BE%D0%B7%D0%B0,+%D0%9A%D0%B0%D0%BB%D0%B8%D1%84%D0%BE%D1%80%D0%BD%D0%B8%D1%8F/@38.435521,-122.7861171,12z/data=!3m1!4b1!4m6!3m5!1s0x80843bc936e647d7:0x5ccd656bc54f4849!8m2!3d38.440429!4d-122.7140548!16zL20vMHI3ODU?entry=ttu",
//       },
//       {
//         text: "Kateryna Tymofieieva",
//         type: "linkedin",
//         href: "https://www.linkedin.com/in/kateryna-tymofieieva-4b0890236/",
//       },
//     ],
//   },
// ];
const Home = () => {
  // useEffect(()=> {
  //   addCollectionAndDocuments('resume', resume)
  // }, [])

  // useEffect(()=>{
  //  const data= getCategoriesAndDoc('resume')

  // }, [])
  return (
    <div className={styles.home}>
      <div>
        <Link to="/resume/CV.pdf" target="_blank" download>
          <Button>Download CV</Button>
        </Link>
        <div className={styles.quotation}>
          Frontend development is where pixels meet purpose, and code brings
          creativity to life.
        </div>
      </div>
    </div>
  );
};

export default Home;
