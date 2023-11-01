import React, { useContext, useState } from "react";
import { nanoid } from "nanoid";

import Button from "../button/Button";
import { UserResumeContext } from "../../context/UserResumeContext";
import { checkEmptyObjectInArray } from "../../utils/helperFunctions/helperFunctions";
import { IUserResume } from "../../types/interfaces";

import styles from "./Step1.module.css";
import ExperienceCard from "../Card/ExperienceCard";
import ContactCard from "../Card/ContactCard";
import SkillsInfo from "../Card/SkillsInfo";

const standardValues = [
  { name: "React", range: 0, color: "grey" },
  { name: "CSS", range: 0, color: "grey" },
  { name: "HTML", range: 0, color: "grey" },
  { name: "REDUX", range: 0, color: "grey" },
  { name: "GIT", range: 0, color: "grey" },
  { name: "MONGODB", range: 0, color: "grey" },
  { name: "NODEJS", range: 0, color: "grey" },
  { name: "EXPRESS", range: 0, color: "grey" },
  { name: "JAVASCRIPT", range: 0, color: "grey" },
  { name: "TYPESCRIPT", range: 0, color: "grey" },
];
const colorOptions = [
  "blue",
  "darkred",
  "green",
  "red",
  "yellow",
  "darkgreen",
  "darkblue",
  "violet",
  "lilac",
  "pink",
];

const Step2 = () => {
  const { currentStep, setCurrentStep, resume, setResume } =
    useContext(UserResumeContext);
  const { experience } = resume;

  const [number, setNumber] = useState(experience.length || 1);
  const [inputValues, setInputValues] = useState({
    skill: "",
    range: 0,
    color: "white",
  });
  const [describeSkills, setDescribeSkills] = useState("");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCurrentStep(currentStep - 1);
    const additionalField = {
      university: "",
      diploma: "",
      startDay: "",
      endDay: "",
      id: nanoid(),
    };
    if (!resume["education"].length) {
      setResume((prevResume: IUserResume) => ({
        ...prevResume,
        education: [...prevResume["education"], { ...additionalField }],
      }));
    }
  };

  const setSkillsInfo = () => {
    setResume((prev) => {
      let newSkillsInfo = prev.skills.skillsInfo.filter(
        (item) => item.trim() !== ""
      );
      return {
        ...prev,
        skills: {
          ...prev.skills,
          skillsInfo: [...newSkillsInfo, describeSkills],
        },
      };
    });
  };

  const handleSubmit = () => {
    if (describeSkills.length) {
      setSkillsInfo();
    }

    const newSkillsName = resume.skills.skillsName.filter(
      (skill) => skill.skill.length && skill.range !== 0
    );
    if (inputValues.skill.length && inputValues.range > 0) {
      setResume((prev) => ({
        ...prev,
        skills: {
          ...prev.skills,
          skillsName: [...newSkillsName, inputValues],
        },
      }));
    }
    setResume((prev) => ({
      ...prev,
      skills: {
        ...prev.skills,
        skillsName: [...newSkillsName],
      },
      experience: [
        ...prev.experience.filter(
          (exp) => exp.companyName.length && exp.description.length
        ),
      ],
    }));

    setCurrentStep(currentStep + 1);
  };

  const additionalObject = {
    title: "",
    companyName: "",
    location: "",
    description: "",
    startDay: "",
    endDay: "",
    id: nanoid(),
  };

  const addNewExperience = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    checkEmptyObjectInArray(
      "experience",
      additionalObject,
      resume,
      setResume,
      number,
      setNumber
    );
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setInputValues((prev) => ({
      ...prev,
      [name]: value,
    }));
    // }
  };

  const addSkills = () => {
    if (inputValues.skill.length && inputValues.range > 0) {
      const newSkillsName = resume.skills.skillsName.filter(
        (skill) => skill.skill.length && skill.range !== 0
      );
      setResume((prev) => ({
        ...prev,
        skills: {
          ...prev.skills,
          skillsName: [...newSkillsName, inputValues],
        },
      }));
      setInputValues({ skill: "", range: 0, color: "grey" });
    }
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit}>
        <h2>Step 2: Experience and contacts</h2>
        <div className={styles.container}>
          {experience.map((exp, i) => {
            return <ExperienceCard index={i} />;
          })}
          <Button onClick={addNewExperience}>add more experience</Button>

          <div className={styles.group}>
            <SkillsInfo
              describeSkills={describeSkills}
              setDescribeSkills={setDescribeSkills}
            />

            <Button
              onClick={(e) => {
                e.preventDefault();

                setSkillsInfo();
                setDescribeSkills("");
              }}
            >
              more
            </Button>
            <input
              className={styles.formInput}
              type="text"
              id="myInput"
              list="standardValues"
              value={inputValues.skill}
              onChange={handleInputChange}
              placeholder="add skill"
              name="skill"
            />
            <datalist id="standardValues">
              {standardValues.map((value, index) => (
                <option key={index} value={value.name} />
              ))}
            </datalist>
            <input
              type="range"
              min="0"
              max="100"
              value={inputValues.range}
              onChange={handleInputChange}
              name="range"
              style={{ width: "30%", marginRight: "10px", minWidth: "150px" }}
            />
            <select
              name="color"
              value={inputValues.color}
              onChange={handleInputChange}
              className={styles.customSelect}
              style={{
                background: inputValues.color,
              }}
            >
              {colorOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <Button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                addSkills();
              }}
            >
              Add Skill
            </Button>
          </div>
          <ContactCard />
        </div>
        <div className={styles.df}>
          <Button buttonType="inverted" onClick={handleClick}>
            Previous
          </Button>
          <Button type="submit" buttonType="inverted">
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Step2;
