import React, { useState } from "react";
import styles from "./SkillsSlider.module.css";
import useResponsive from "../../hook/useMediaQuery";
interface IProps {
  skills: {
    skill: string;
    range: number;
    color: string;
    label?: React.ReactElement;
  }[];
}

const SkillsSlider = ({ skills }: IProps) => {
  const [isMobile, isTablet] = useResponsive();
  // const [skillLevels, setSkillLevels] = useState(skills);

  // const handleSkillChange = (skill: string, value: any) => {
  //   const newSkills = skills.map((el) => {
  //     if (skill === el.skill) {
  //       return { ...el, range: value };
  //     }
  //     return el;
  //   });
  //   // setSkillLevels(newSkills);
  // };

  return (
    <div className={styles.sliderContainer}>
      {skills.map(({ skill, color, label, range }, i) => {
        return (
          <div className="skill-slider" key={skill}>
            <div className={styles.skillLabel}>
              <label>{skill}</label>
              <p>{`${range}%`}</p>
            </div>
            <input
              type="range"
              min={0}
              max={100}
              value={range}
              // onChange={(e) => handleSkillChange(skill, e.target.value)}
              style={{ "--thumb-color": `var(--${color})` } as React.CSSProperties }
            />
          </div>
        );
      })}
    </div>
  );
};

export default SkillsSlider;
