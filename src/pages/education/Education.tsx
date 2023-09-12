import { useContext } from "react";

import { ResumeContext } from "../../context/ResumeContext";
import styles from "./Education.module.css";

// const education = [
//   {
//     university: 'National Technical University "Kharkiv Polytechnic Institute"',
//     years: "2002-2006",
//     diploma: "Bachelor's degree",
//     href: "https://www.kpi.kharkov.ua/eng/",
//     img: { src: "/assets/cropped-logo.png", alt: "logo" },
//     type: "education",
//   },
//   {
//     university: 'National Technical University "Kharkiv Polytechnic Institute"',
//     years: "2006-2008",
//     diploma: "Master's degree",
//     href: "https://www.kpi.kharkov.ua/eng/",
//     img: { src: "/assets/cropped-logo.png", alt: "logo" },
//     type: "education",
//   },
// ];
const Education = () => {
  const {
    resume: { education },
  } = useContext(ResumeContext);

  return (
    <div className={styles.wrapper}>
      <div>
        <span>education</span>
        <h2>education</h2>
      </div>
      {education.map(({ university, years, diploma, href, img }) => {
        return (
          <div key={`${diploma}_${years}`} className={styles.grid}>
            <div className={styles.wrapperIcon}>
              <a
                href={href}
                onClick={() => {
                  window.location.href = href;
                }}
                rel="noreferrer"
              >
                {img ? (
                  <img src={img.src} alt={img.alt} />
                ) : (
                  <div className={styles.circle} />
                )}
              </a>
            </div>
            <div
              className={styles.text}
            >{`${diploma} ${university} ${years}`}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Education;
