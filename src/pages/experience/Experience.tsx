import { useContext } from "react";

import { ResumeContext } from "../../context/ResumeContext";
import styles from "./Experience.module.css";

// const experiences = [
//   {
//     title: "React developer",
//     companyName: "TechnoPointer",
//     location: "San Francisco, CA",
//     description: [
//       "Led the development of a groundbreaking platform that facilitates collaboration between dental clinics and laboratories",
//       "Designed and implemented role-based permissions to define and regulate application usage, ensuring controlled access and tailored functionality for various user roles",
//       "Developed and coded web applications for customer accounts of the dentist clinic, including diagnosing root cause problems, debugging issues, and identifying solutions",
//       "Utilized Redux for enhanced application state management, leveraging its debugging capabilities to streamline the development process",
//       "Engineered an intuitive interface using the latest React capabilities for the management of patient cards, including tasks such as addition, updating, and deletion, enhancing the overall user experience",
//       "Integrated Axios, a promise-based library, to seamlessly retrieve data from REST endpoints, enhancing data accessibility and enriching the application's functionality",
//       "Designed client-side Form Validation for registration forms, ensuring data accuracy and integrity",
//       "Worked closely with a team on front-end design changes that boosted organic web traffic by an impressive 10%",
//       "Demonstrated a commitment to delivering high-quality work in a timely and efficient manner using the Scrum methodology to manage and develop solutions on multiple projects",
//       "Used GIT for version control",
//     ],
//     date: "07/2022 - current",
//   },
//   {
//     title: "Software Developer",
//     companyName: "TechnoPointer",
//     location: "San Francisco, CA",
//     description: [
//       "Led the development of a groundbreaking platform that facilitates collaboration between dental clinics and laboratories",
//       "Designed and implemented role-based permissions to define and regulate application usage, ensuring controlled access and tailored functionality for various user roles",
//       "Developed and coded web applications for customer accounts of the dentist clinic, including diagnosing root cause problems, debugging issues, and identifying solutions",
//       "Utilized Redux for enhanced application state management, leveraging its debugging capabilities to streamline the development process",
//       "Engineered an intuitive interface using the latest React capabilities for the management of patient cards, including tasks such as addition, updating, and deletion, enhancing the overall user experience",
//       "Integrated Axios, a promise-based library, to seamlessly retrieve data from REST endpoints, enhancing data accessibility and enriching the application's functionality",
//       "Designed client-side Form Validation for registration forms, ensuring data accuracy and integrity",
//       "Worked closely with a team on front-end design changes that boosted organic web traffic by an impressive 10%",
//       "Demonstrated a commitment to delivering high-quality work in a timely and efficient manner using the Scrum methodology to manage and develop solutions on multiple projects",
//       "Used GIT for version control",
//     ],
//     date: "08/2019 – 07/2022",
//   },
//   {
//     title: "University economics professor",
//     companyName: "National Technical University",
//     location: "Kharkiv, Ukraine",
//     date: "08/2014 – 07/2018",
//   }
// ];

const Experience = () => {
  const {
    resume: { experience },
  } = useContext(ResumeContext);

  return (
    <div className={styles.wrapper}>
      <div>
        <span>EXPERIENCE</span>
        <h2>WORK EXPERIENCE</h2>
      </div>
      <div className={styles.experience}>
        {experience.map(
          ({ title, companyName, location, description, date }) => {
            return (
              <div key={`${title}_${location}_${date}`}>
                <h3>{title}</h3>
                <h5>{companyName}</h5>
                <span>{location}</span>
                <span>{date}</span>
                {description?.map((el, i) => {
                  return (
                    <ul key={i}>
                      <li>{el}</li>
                    </ul>
                  );
                })}
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Experience;
