import { useContext } from "react";
import styles from "./About.module.css";
import { ResumeContext } from "../../context/ResumeContext";

const About = () => {
  const {
    resume: { about },
  } = useContext(ResumeContext);

  return (
    <div className={styles.wrapper}>
      <div>
        <span>ABOUT</span>
        <h2>WHO AM I?</h2>
      </div>
      <div>
        {about.map((el: string, i: number) => {
          return <p key={i}>{el}</p>;
        })}
      </div>
    </div>
  );
};

export default About;
