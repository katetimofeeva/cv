import { useContext } from "react";

import styles from "./Skills.module.css";

import { ResumeContext } from "../../context/ResumeContext";
import SkillsSlider from "../../components/skillsSlider/SkillsSlider";

const Skills = () => {
  const {
    resume: { skills },
  } = useContext(ResumeContext);

  return (
    <div className={styles.wrapper}>
      <div>
        <span>SKILLS</span>
        <h2>WHICH SKILLS DO I HAVE?</h2>
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
