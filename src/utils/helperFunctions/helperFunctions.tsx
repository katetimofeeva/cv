import ContactCard from "../../components/Card/ContactCard";
import EducationCard from "../../components/Card/EducationCard";
import ExperienceCard from "../../components/Card/ExperienceCard";
import InfoCard from "../../components/Card/InfoCard";
import SkillsInfo from "../../components/Card/SkillsInfo";
import { IResume, IUserResume } from "../../types/interfaces";

export const addNewField = (
  name: "education" | "experience",
  object: any,
  setResume: Function
) => {
  setResume((prevResume: IUserResume) => ({
    ...prevResume,
    [name]: [...prevResume[name], { ...object }],
  }));
};

export const checkEmptyObjectInArray = (
  name: "education" | "experience",
  object: any,
  arr: IUserResume,
  setResume: Function,
  numberOfEducation: number,
  setNumberOfEducation: Function
) => {
  if (!arr[name].length) {
    addNewField(name, object, setResume);
  } else {
    const lastObject = arr[name][numberOfEducation - 1];
    const isDataFilled = Object.values(lastObject).every((el) => el.length);
    let startDay = new Date(arr[name][numberOfEducation - 1].startDay);
    let endDay = new Date(arr[name][numberOfEducation - 1].endDay);
    if (isDataFilled && arr[name].length === numberOfEducation) {
      if (startDay <= endDay) {
        addNewField(name, object, setResume);
        setNumberOfEducation(() => numberOfEducation + 1);
      } else {
        alert("Please write correct date.");
      }
    } else {
      alert(`Please fill in the current ${name} details first.`);
    }
  }
};

export const deleteItem = <T extends "education" | "experience">(
  id: string,
  resume: IUserResume,
  setResume: Function,
  name: T
) => {
  if (Array.isArray(resume[name])) {
    const newArr = (resume[name] as Array<(typeof resume)[T][0]>).filter(
      (el: (typeof resume)[T][0]) => el.id !== id
    );
    setResume((prev: IUserResume) => ({
      ...prev,
      [name]: newArr,
    }));
  }
};

// type TEditType = "education" | "skillsInfo" | "experience" | "info" | "contact";

export function renderModalContent(
  editType: string,
  id: number,
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>,
  skill: string
) {
  switch (editType) {
    case "education":
      return <EducationCard index={id} setActive={setIsOpenModal} />;
    case "experience":
      return <ExperienceCard index={id} setActive={setIsOpenModal} />;
    case "info":
      return <InfoCard />;
    case "contact":
      return <ContactCard />;
    case "skillsInfo":
      return <SkillsInfo describeSkills={skill} />;
    default:
      return <div>You don't have any changes</div>;
  }
}
