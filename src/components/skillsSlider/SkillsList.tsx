import React from "react";

import styles from "./SkillsSlider.module.css";

interface IProps {
  skillName: {
    skill: string;
    range: number;
    color: string;
  };
}
const SkillsList: React.FC<IProps> = ({ skillName }) => {
  const { skill, range, color } = skillName;
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
        style={{ "--thumb-color": `var(--${color})` } as React.CSSProperties}
      />
    </div>
  );
};

export default SkillsList;
