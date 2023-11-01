import React from "react";
import styles from "./SkillsSlider.module.css";
import SkillsList from "./SkillsList";
interface IProps {
  skills: {
    skill: string;
    range: number;
    color: string;
    label?: React.ReactElement;
  }[];
}

const SkillsSlider = ({ skills }: IProps) => {
  return (
    <div className={styles.sliderContainer}>
      {skills.map((el, i) => {
        return <SkillsList skillName={el} />;
      })}
    </div>
  );
};

export default SkillsSlider;
