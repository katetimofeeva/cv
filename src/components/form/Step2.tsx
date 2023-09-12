import React, { useContext, useState } from "react";

import Button from "../button/Button";
import { UserResumeContext } from "../../context/UserResumeContext";
import { IResumeInfo } from "../../types/interfaces";
import FormInput from "../formInput/FormInput";

import styles from "./Step1.module.css";
type ValidFieldNames =
  | "title"
  | "companyName"
  | "location"
  | "endDay"
  | "description"
  | "startDay";

const Step2 = () => {
  const { currentStep, setCurrentStep, resume, setResume } =
    useContext(UserResumeContext);

  const [formDataExperience, setFormData] = useState({
    experience: [
      {
        title: "",
        companyName: "",
        location: "",
        description: "",
        startDay: "",
        endDay: "",
      },
    ],
    skills: {},
  });
  const { experience, skills } = formDataExperience;
  console.log(experience, "form data");
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("click", currentStep);
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    console.log("submit");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    i?: number
  ) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;

    const { name, value } = target;
    console.log(name, "888", value);
    if (name && (name as ValidFieldNames) !== "description") {
      console.log("step2", experience);
      let newExperience = [...experience];
      if (typeof i === "number") {
        newExperience[i] = { ...newExperience[i], [name]: value };
        setFormData((prevData) => ({
          ...prevData,
          experience: newExperience,
        }));
      }
    } else {
      console.log(name, " 666");

      // setFormData((prevData) => ({
      //   ...prevData,
      //   experience: [...prevData.experience, ],
      // }));
      // let newExperience = formData.experience.map((el) => ({
      //   ...el,
      //   [name]: value,
      // }));
      // console.log()
      // console.log(newExperience, "newExperience");
      // setFormData((prev) => ({ ...prev, education: newExperience }));
    }
  };
  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit}>
        <h2>Step 2: Experience</h2>
        <div className={styles.container}>
          {experience.map(
            (
              { title, companyName, location, description, startDay, endDay },
              i
            ) => {
              return (
                <div key={i}>
                  <FormInput
                    label={"Position"}
                    name={"title"}
                    onChange={(e) => handleChange(e, i)}
                    required={true}
                    value={title}
                    type={"text"}
                  />
                  <FormInput
                    label={"Company name"}
                    name={"companyName"}
                    onChange={(e) => handleChange(e, i)}
                    required={true}
                    value={companyName}
                    type={"text"}
                  />
                  <FormInput
                    label={"Location"}
                    name={"location"}
                    onChange={(e) => handleChange(e, i)}
                    required={true}
                    value={location}
                    type={"text"}
                  />
                  <FormInput
                    label={"End date (or expected)"}
                    name={"endDay"}
                    onChange={(e) => handleChange(e, i)}
                    required={true}
                    value={startDay}
                    type={"month"}
                  />
                  <FormInput
                    label={"End date (or expected)"}
                    name={"endDay"}
                    onChange={(e) => handleChange(e, i)}
                    required={true}
                    value={endDay}
                    type={"month"}
                  />
                  <div className={styles.textAreaWrapper}>
                    <textarea
                      name="description"
                      value={description}
                      required={true}
                      onChange={(e) => handleChange(e, 0)}
                      className={styles.textArea}
                    />
                    <label className={styles.textAreaLabel}>
                      Describe your main responsibilities
                    </label>
                  </div>
                </div>
              );
            }
          )}
        </div>

        <div className={styles.df}>
          <Button buttonType="inverted" onClick={handleClick}>
            Previous
          </Button>
          <Button
            type="submit"
            buttonType="inverted"
            // onClick={handleNext}
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Step2;
