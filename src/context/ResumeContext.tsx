import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDoc } from "../utils/firebase/Firebase";
import { IResume, ProviderProps } from "../types/interfaces";
interface IResumeContext {
  resume: IResume;
}

export const ResumeContext = createContext<IResumeContext>({
  resume: {
    about: [],
    contacts: [],
    education: [],
    experience: [],
    skills: { skillsName: [], skillsInfo: [] },
  },
  // setResume: ()=>{}
});

export const ResumeProvider = ({ children }: ProviderProps) => {
  const [resume, setResume] = useState<IResume>({
    about: [],
    contacts: [],
    education: [],
    experience: [],
    skills: { skillsName: [], skillsInfo: [] },
  });
  const value = { resume, setResume };
  useEffect(() => {
    const getCategoriesResumeMap = async () => {
      const resumeMap = await getCategoriesAndDoc("resume");
      console.log(resumeMap, " resumeMap");

      const updatedResume: IResume = {
        ...resume,
        about: Array.isArray(resumeMap.about) ? resumeMap.about : [],
        contacts: Array.isArray(resumeMap.contacts) ? resumeMap.contacts : [],
        education: Array.isArray(resumeMap.education)
          ? resumeMap.education
          : [],
        experience: Array.isArray(resumeMap.experience)
          ? resumeMap.experience
          : [],
        skills: resumeMap.skills 
      };

      setResume(updatedResume);
    };

    getCategoriesResumeMap();
  }, []);
  return (
    <ResumeContext.Provider value={value}>{children}</ResumeContext.Provider>
  );
};
