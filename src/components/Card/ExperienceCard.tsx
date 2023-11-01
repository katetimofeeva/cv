import React, { useContext } from "react";
import { RiDeleteBinLine } from "react-icons/ri";

import FormInput from "../formInput/FormInput";
import { deleteItem } from "../../utils/helperFunctions/helperFunctions";
import { UserResumeContext } from "../../context/UserResumeContext";

import styles from "./Card.module.css";
interface IExpFormProps {
  index: number;
  setNumberOfEducation?: Function;
  setActive?: Function
}

const ExperienceForm = ({ index, setActive }: IExpFormProps) => {
  const { resume, setResume } = useContext(UserResumeContext);
  const { title, companyName, location, description, startDay, endDay, id } =
    resume.experience[index];

  const deleteExperience = (id: string) => {
    deleteItem(id, resume, setResume, "experience");
    if(setActive){
      setActive(false)
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    i?: number
  ) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;

    const { name, value } = target;
    let newExperience = [...resume.experience];
    if (typeof i === "number") {
      newExperience[i] = { ...newExperience[i], [name]: value };
      setResume((prevData) => ({
        ...prevData,
        experience: newExperience,
      }));
    }
  };

  return (
    <div key={index} className={styles.list}>
      <RiDeleteBinLine
        className={styles.removeBin}
        onClick={() => deleteExperience(id)}
      />
      <FormInput
        label={"Position"}
        name={"title"}
        onChange={(e) => handleChange(e, index)}
        value={title}
        type={"text"}
      />
      <FormInput
        label={"Company name"}
        name={"companyName"}
        onChange={(e) => handleChange(e, index)}
        value={companyName}
        type={"text"}
      />
      <FormInput
        label={"Location"}
        name={"location"}
        onChange={(e) => handleChange(e, index)}
        value={location}
        type={"text"}
      />
      <FormInput
        label={"End date (or expected)"}
        name={"startDay"}
        onChange={(e) => handleChange(e, index)}
        value={startDay}
        type={"month"}
      />
      <FormInput
        label={"End date (or expected)"}
        name={"endDay"}
        onChange={(e) => handleChange(e, index)}
        value={endDay}
        type={"month"}
      />
      <div className={styles.textAreaWrapper}>
        <textarea
          name="description"
          value={description}
          onChange={(e) => handleChange(e, index)}
          className={styles.textArea}
        />
        <label className={styles.textAreaLabel}>
          Describe your main responsibilities
        </label>
      </div>
    </div>
  );
};

export default ExperienceForm;
