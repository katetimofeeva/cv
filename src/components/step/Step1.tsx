import React, { useState, useContext } from "react";
import { nanoid } from "nanoid";

import EducationCard from "../Card/EducationCard";
import InfoCard from "../Card/InfoCard";
import Button from "../button/Button";
import { UserResumeContext } from "../../context/UserResumeContext";
import { checkEmptyObjectInArray } from "../../utils/helperFunctions/helperFunctions";

import styles from "./Step1.module.css";

const Step1 = () => {
  const { currentStep, setCurrentStep, resume, setResume } =
    useContext(UserResumeContext);
  const { education } = resume;
  const [number, setNumber] = useState(education.length || 1);

  const additionalField = {
    university: "",
    diploma: "",
    startDay: "",
    endDay: "",
    id: nanoid(),
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    checkEmptyObjectInArray(
      "education",
      additionalField,
      resume,
      setResume,
      number,
      setNumber
    );
  };

  const handleSubmit = () => {
    if (
      resume.education[resume.education.length - 1].university.trim().length ===
      0
    ) {
      const newEducation = [...resume.education];
      newEducation.pop();
      setResume((prev) => ({ ...prev, education: newEducation }));
    }
    setCurrentStep(currentStep + 1);
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit}>
        <h2>Step 1: WHO ARE YOU?</h2>
        <div className={styles.container}>
          <InfoCard />

          {education.map((edu, i) => {
            return <EducationCard key={i} index={i} setNumber={setNumber} />;
          })}
          <Button onClick={handleClick}>add School</Button>
        </div>

        <div className={styles.df}>
          <Button type="submit" buttonType="inverted">
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Step1;
