import React, { useContext } from "react";
import { MdOutlinePlaylistRemove } from "react-icons/md";

import { UserResumeContext } from "../../context/UserResumeContext";
import styles from "./Card.module.css";

interface ISkillsInfoProps {
  describeSkills: string;
  setDescribeSkills?: Function;
}
const SkillsInfo = ({
  describeSkills,
  setDescribeSkills,
}: ISkillsInfoProps) => {
  const {  setResume } = useContext(UserResumeContext);

  return (
    <div className={styles.textAreaWrapper}>
      <textarea
        name="skillsInfo"
        placeholder="Describe your skills"
        value={describeSkills}
        onChange={(e) => {
          if (setDescribeSkills) {
            setDescribeSkills(e.target.value);
          } else {
            setResume((prev) => {
              let updatedSkillsInfo = [...prev.skills.skillsInfo]
              const index = updatedSkillsInfo.findIndex(
                (item) => item === describeSkills
              );
              updatedSkillsInfo[index] = e.target.value;
              return {
                ...prev,
                skills: {
                  ...prev.skills,
                  skillsInfo: updatedSkillsInfo,
                },
              };
            });
          }
        }}
        className={styles.textArea}
      />
      <MdOutlinePlaylistRemove
        className={styles.icon}
        onClick={() => {
          if (setDescribeSkills) {
            setDescribeSkills("");
          } else {
            console.log("here");
            setResume((prev) => {
              let updatedSkillsInfo = [...prev.skills.skillsInfo];
              const index = updatedSkillsInfo.findIndex(
                (item) => item === describeSkills
              );
              updatedSkillsInfo[index] = "";
              return {
                ...prev,
                skills: {
                  ...prev.skills,
                  skillsInfo: updatedSkillsInfo,
                },
              };
            });
          }
        }}
      />
    </div>
  );
};

export default SkillsInfo;
