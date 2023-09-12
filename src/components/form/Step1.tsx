import React, { useState, useEffect , useContext} from "react";

import FormInput from "../formInput/FormInput";
import Button from "../button/Button";
import { UserResumeContext } from "../../context/UserResumeContext";
import { IFormData } from "../../types/interfaces";

import styles from "./Step1.module.css";

type ValidFieldNames = "university" | "diploma" | "startDay" | "endDay" | "about";

const Step1 = () => {
 
  const {currentStep, setCurrentStep, resume, setResume} = useContext(UserResumeContext)
  const [numberOfEducation, setNumberOfEducation] = useState(1)

  const [formData, setFormData] = useState<IFormData>({
    about: [""],
    education: [
      {
        university: "",
        diploma: "",
        startDay: "",
        endDay: "",
      },
    ],
  });
  
 const { about, education } = formData;
  // для созранения шага на котором остановилс
  //   useEffect(() => {
  //     const savedStep = localStorage.getItem("currentStep");
  //     if (savedStep) {
  //       setStep(Number(savedStep));
  //     }
  //   }, []);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const firstEducation = formData.education[numberOfEducation-1];
    const isDataFilled =
      firstEducation.university &&
      firstEducation.diploma &&
      firstEducation.startDay  &&
      firstEducation.endDay;
      let startDay = new Date(formData.education[numberOfEducation-1].startDay)
      let endDay = new Date(formData.education[numberOfEducation-1].endDay)

      if (isDataFilled && formData.education.length === (numberOfEducation)) {
        if (startDay <= endDay) {
          setFormData((prev) => {
            return {
              ...prev,
              education: [
                ...prev.education,
                { university: "", diploma: "", startDay: "", endDay: "" },
              ],
            };
          });
          setNumberOfEducation(()=>numberOfEducation+1)
         
        } else {
          // добавить модальное окно
          alert("Please write correct date.");
        }
      } else {
        alert("Please fill in the current education details first.");
      }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, i: number) => {

    const target = e.target as HTMLInputElement | HTMLTextAreaElement

    const {name, value} = target
    const trimValue = value.trim()
    if ( name  && (name as ValidFieldNames) === "about" && trimValue) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: [value],
      }));
    } else{
      let newEducation = [...formData.education];
      
      newEducation[i] = {...newEducation[i], [name]: value}
    setFormData((prev) => ({ ...prev, education: newEducation}));
    }
    
  };

  const handleSubmit = () => {
    console.log(formData, "formData");
    console.log(formData.education[formData.education.length-1].university.trim().length  , 'length')
    if(formData.education[formData.education.length-1].university.trim().length === 0 ){
      
      setFormData((prev)=>({...prev, education:formData.education}))
    }
    setCurrentStep(currentStep+1)
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit}>
        <h2>Step 1: About</h2>
        <div className={styles.container}>
          <div className={styles.textAreaWrapper}>
            <textarea
              name="about"
              value={about[0]}
              required={true}
              onChange={(e)=>handleChange(e, 0)}
              className={styles.textArea}
            />
            <label className={styles.textAreaLabel}>write about yourself</label>
          </div>

          {education.map(({ university, diploma, startDay, endDay }, i) => {
            return (
              <div key={i}>
                <FormInput
                  label={"School"}
                  name={"university"}
                  onChange={(e) => handleChange(e, i)}
                  required={true}
                  value={university}
                  type={"text"}
                />
                <FormInput
                  label={"Degree"}
                  name={"diploma"}
                  onChange={(e) => handleChange(e, i)}
                  required={true}
                  value={diploma}
                  type={"text"}
                />
                <FormInput
                  label={"Start date"}
                  name={"startDay"}
                  onChange={(e) => handleChange(e, i)}
                  required={true}
                  value={startDay}
                  type={"month"}
                  className={"customMonthInput"}
                />
                <FormInput
                  label={"End date (or expected)"}
                  name={"endDay"}
                  onChange={(e) => handleChange(e, i)}
                  required={true}
                  value={endDay}
                  type={"month"}
                />
              </div>
            );
          })}
        </div>

        <div className={styles.df}>
          <Button buttonType="inverted" onClick={handleClick}>
            add School
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

export default Step1;
