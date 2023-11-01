import React, { useContext } from "react";
import { RiDeleteBinLine } from "react-icons/ri";

import { UserResumeContext } from "../../context/UserResumeContext";
import FormInput from "../formInput/FormInput";
import { deleteItem } from "../../utils/helperFunctions/helperFunctions";

import styles from "./Card.module.css";

interface IEducationFormProps {
  index: number;
  setNumber?: Function;
  setActive?: Function
}

const EducationCard = ({
  index,
  setNumber,
  setActive
}: IEducationFormProps) => {
  const { resume, setResume } = useContext(UserResumeContext);
  
  const { university, diploma, startDay, endDay, id } = resume?.education[index];

  const deleteEducation = (id: string) => {
    deleteItem(id, resume, setResume, "education");
    if (setNumber) {
      setNumber((prev: number) => prev - 1);
    }
    if(setActive){
      setActive(false)
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    i: number
  ) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;

    const { name, value } = target;

    let newEducation = [...resume.education];

    newEducation[i] = { ...newEducation[i], [name]: value };
    setResume((prev) => ({ ...prev, education: newEducation }));
  };
  return (
    <div className={styles.list} key={index}>
      <RiDeleteBinLine
        className={styles.removeBin}
        onClick={() => deleteEducation(id)}
      />
      <FormInput
        label={"School"}
        name={"university"}
        onChange={(e) => handleChange(e, index)}
        value={university}
        type={"text"}
      />
      <FormInput
        label={"Degree"}
        name={"diploma"}
        onChange={(e) => handleChange(e, index)}
        value={diploma}
        type={"text"}
      />
      <FormInput
        label={"Start date"}
        name={"startDay"}
        onChange={(e) => handleChange(e, index)}
        value={startDay}
        type={"month"}
        className={"customMonthInput"}
      />
      <FormInput
        label={"End date (or expected)"}
        name={"endDay"}
        onChange={(e) => handleChange(e, index)}
        value={endDay}
        type={"month"}
      />
    </div>
  );
};

export default EducationCard;
