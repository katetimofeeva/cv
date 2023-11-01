import { createContext, useState } from "react";
import { nanoid } from "nanoid";
import { ISkillsInfo } from "../types/interfaces";
interface IResume {
  about: string;
  name: string;
  education: {
    university: string;
    diploma: string;
    startDay: string;
    endDay: string;
    id: string;
  }[];
  experience: {
    title: string;
    companyName: string;
    location: string;
    description: string;
    startDay: string;
    endDay: string;
    id: string;
  }[];
  skills: ISkillsInfo;
  contacts: { phone: string; linkedin: string };
}

interface IValue {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  resume: IResume;
  setResume: React.Dispatch<React.SetStateAction<IResume>>;
}

export const UserResumeContext = createContext<IValue>({
  currentStep: 0,
  setCurrentStep: () => {},
  resume: {
    about: "",
    name: "",
    education: [
      {
        university: "",
        diploma: "",
        startDay: "",
        endDay: "",
        id: nanoid(),
      },
    ],
    experience: [
      {
        title: "",
        companyName: "",
        location: "",
        description: "",
        startDay: "",
        endDay: "",
        id: nanoid(),
      },
    ],
    skills: {
      skillsName: [{ skill: "", range: 0, color: "" }],
      skillsInfo: [""],
    },
    contacts: {
      phone: "",
      linkedin: "",
    },
  },
  setResume: () => {},
});
export const UserResumeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [resume, setResume] = useState({
    about: "",
    name: "",
    education: [
      {
        university: "",
        diploma: "",
        startDay: "",
        endDay: "",
        id: nanoid(),
      },
    ],
    experience: [
      {
        title: "",
        companyName: "",
        location: "",
        description: "",
        startDay: "",
        endDay: "",
        id: nanoid(),
      },
    ],
    skills: {
      skillsName: [{ skill: "", range: 0, color: "" }],
      skillsInfo: [""],
    },
    contacts: {
      phone: "",
      linkedin: "",
    },
  });

  const value: IValue = { currentStep, setCurrentStep, resume, setResume };
  return (
    <UserResumeContext.Provider value={value}>
      {children}
    </UserResumeContext.Provider>
  );
};
