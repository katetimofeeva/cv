import { useContext } from "react";

import styles from "./Skills.module.css";

import { ResumeContext } from "../../context/ResumeContext";
import SkillsSlider from "../../components/skillsSlider/SkillsSlider";

const Skills = () => {
  const {
    resume: { skills },
  } = useContext(ResumeContext);

  console.log(skills.skillsInfo, "skills");
  return (
    <div className={styles.wrapper}>
      <div>
        <span>ABOUT</span>
        <h2>WHO AM I?</h2>
      </div>
      <div>
        {skills.skillsInfo.map((el: string, i: number) => {
          return <p key={i}>{el}</p>;
        })}
      </div>
      <SkillsSlider skills={skills.skillsName} />
    </div>
  );
};

export default Skills;
