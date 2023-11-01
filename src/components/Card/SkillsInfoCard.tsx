import React, { useContext, useState } from "react";
import { MdOutlinePlaylistRemove } from "react-icons/md";

import { UserResumeContext } from "../../context/UserResumeContext";
import styles from "./Card.module.css";

const SkillsInfoCard = (index: number) => {
  const { resume, setResume } = useContext(UserResumeContext);

  const handleSkillsInfoChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const updatedSkillsInfo = [...resume.skills.skillsInfo];
    updatedSkillsInfo[index] = e.target.value;

    setResume((prev) => ({
      ...prev,
      skills: {
        ...prev.skills,
        skillsInfo: updatedSkillsInfo,
      },
    }));
  };
  return (
    <div className={styles.group}>
      <div className={styles.textAreaWrapper}>
        <textarea
          name="skillsInfo"
          placeholder="Describe your skills"
          value={resume.skills.skillsInfo[index]}
          onChange={handleSkillsInfoChange}
          className={styles.textArea}
        />
      </div>
    </div>
  );
};

export default SkillsInfoCard;
