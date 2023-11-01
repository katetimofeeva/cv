import React, { useContext } from "react";

import FormInput from "../formInput/FormInput";
import { UserResumeContext } from "../../context/UserResumeContext";

import styles from "./Card.module.css";
const InfoCard = () => {
  const { resume, setResume } = useContext(UserResumeContext);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    i: number
  ) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;

    const { name, value } = target;

    setResume((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div className={styles.textAreaWrapper}>
      <FormInput
        label="Write your full name"
        name="name"
        onChange={(e) => handleChange(e, 0)}
        value={resume.name}
        required={true}
      />
      <div className={styles.textAreaWrapper}>
        <textarea
          name="about"
          value={resume.about}
          required={true}
          onChange={(e) => handleChange(e, 0)}
          className={styles.textArea}
        />
        <label className={styles.textAreaLabel}>write about yourself</label>
      </div>
    </div>
  );
};

export default InfoCard;
