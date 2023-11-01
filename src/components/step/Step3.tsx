import { useContext, useState } from "react";
import { GrEdit } from "react-icons/gr";

import { UserResumeContext } from "../../context/UserResumeContext";
import SkillsSlider from "../skillsSlider/SkillsSlider";
import Modal from "../Modal/Modal";
import Button from "../button/Button";
import { renderModalContent } from "../../utils/helperFunctions/helperFunctions";

import styles from "./Step1.module.css";

const Step3 = () => {
  const { resume, setCurrentStep, currentStep } = useContext(UserResumeContext);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [id, setId] = useState(0);
  const [editType, setEditType] = useState("");

  const handlerOpenModal = (index: number, type: string) => {
    setIsOpenModal(true);
    setId(index);
    setEditType(type);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCurrentStep(currentStep - 1);
  };

  const clickNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCurrentStep(currentStep + 1);
  };
  return (
    <div className={styles.wrapper}>
      <h2>Step 3: Please review your resume</h2>
      <div>
        <h3>Summary:</h3>
        <div className={styles.containerGrid}>
          <div>
            <span>Full Name: {resume.name}</span>
            <span>About: {resume.about}</span>
          </div>
          <GrEdit
            onClick={() => {
              handlerOpenModal(0, "info");
            }}
          />
        </div>
      </div>
      {!!resume.education.length && (
        <div>
          <h3>Education:</h3>
          <ul>
            {resume.education.map((edu, i) => (
              <div className={styles.containerGrid}>
                <>
                  <li key={edu.id}>
                    <span>University: {edu.university}</span>
                    <span>Degree: {edu.diploma}</span>
                    <span>
                      {edu.startDay} - {edu.endDay}
                    </span>
                  </li>
                </>
                <GrEdit onClick={() => handlerOpenModal(i, "education")} />
              </div>
            ))}
          </ul>
        </div>
      )}
      {!!resume.experience.length && (
        <div>
          <h3>Experience:</h3>
          <ul>
            {resume.experience.map((exp, i) => (
              <div className={styles.containerGrid}>
                <>
                  <li key={exp.id}>
                    <span>Title: {exp.title}</span>
                    <span>Company Name: {exp.companyName}</span>
                    <span>Location: {exp.location}</span>
                    <span>Description: {exp.description}</span>
                    <span>
                      {exp.startDay} - {exp.endDay}
                    </span>
                  </li>
                </>
                <GrEdit onClick={() => handlerOpenModal(i, "experience")} />
              </div>
            ))}
          </ul>
        </div>
      )}
      <div>
        <h3>Skills:</h3>
        <ul>
          <li>
            <SkillsSlider skills={resume.skills.skillsName} />
          </li>
          <li>
            <h3>Skills Info:</h3>
            <ul>
              {resume.skills.skillsInfo.map((info, i) => (
                <div className={styles.containerGrid}>
                  <li key={i} className={styles["mt-b"]}>
                    {info}{" "}
                  </li>
                  <GrEdit onClick={() => handlerOpenModal(i, "skillsInfo")} />
                </div>
              ))}
            </ul>
          </li>
        </ul>
      </div>

      {(!!resume.contacts.linkedin || !!resume.contacts.phone) && (
        <>
          <h3>Contacts:</h3>
          <div className={styles.containerGrid}>
            <div>
              <div>Phone: {resume.contacts.phone}</div>
              <div>LinkedIn: {resume.contacts.linkedin}</div>
            </div>
            <GrEdit onClick={() => handlerOpenModal(0, "contact")} />
          </div>
        </>
      )}
      {isOpenModal && (
        <Modal active={isOpenModal} setActive={setIsOpenModal}>
          {renderModalContent(
            editType,
            id,
            setIsOpenModal,
            resume.skills.skillsInfo[id]
          )}
        </Modal>
      )}
      <div className={`${styles.df} ${styles["pt-b"]}`}>
        <Button buttonType="inverted" onClick={handleClick}>
          Previous
        </Button>
        <Button type="submit" buttonType="inverted" onClick={clickNext}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default Step3;
