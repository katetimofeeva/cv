import { createContext, useState } from "react";

interface IValue {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  resume: {
    about: string[];
    education: {
      university: string;
      diploma: string;
      startDay: string;
      endDay: string;
    }[];
  };
  setResume: React.Dispatch<
    React.SetStateAction<{
      about: string[];
      education: {
        university: string;
        diploma: string;
        startDay: string;
        endDay: string;
      }[];
    }>
  >;
}
export const UserResumeContext = createContext<IValue>({
  currentStep: 0,
  setCurrentStep: () => {},
  resume: {
    about: [""],
    education: [
      {
        university: "",
        diploma: "",
        startDay: "",
        endDay: "",
      },
    ],
  },
  setResume: () => {},
});
export const UserResumeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [resume, setResume] = useState({
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

  const value: IValue = { currentStep, setCurrentStep, resume, setResume };
  return (
    <UserResumeContext.Provider value={value}>
      {children}
    </UserResumeContext.Provider>
  );
};
