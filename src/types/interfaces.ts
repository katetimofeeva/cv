import {ReactNode} from 'react'

export interface IResume {
    about: string[]|string;
    contacts: {
        text: string; type: string; href: string; 
    }[]|[];
    education: IEducation[]|[];
    experience: IResumeInfo[]|[];
    skills: ISkillsInfo;
}

export interface IResumeInfo {
    title: string;
    companyName: string;
    location?: string;
    description?: string[];
    date?: string;
}
  
export interface ISkillsInfo {
    skillsName: ISkill[];
    skillsInfo: string[];
}
  
export interface ISkill {
    skill: string;
    range: number;
    color: string;
}
  
export interface IEducation {
    university: string;
    years: string;
    diploma: string;
    href: string;
    type: string;
    img: { src: string; alt: string };
}
  
export interface ProviderProps {
    children: ReactNode;
}

export interface IFormData {
    about: string;
    education: IEducationForm[];
}
  
export interface IEducationForm {
    university: string;
    diploma: string;
    startDay: string;
    endDay: string;
}

export interface IValue {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  resume: {
    about: string;
    name: string;
    education: IUserEducation[];
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
    contacts: {phone: string, linkedin: string}
  };
  setResume: React.Dispatch<
    React.SetStateAction<{
      about: string;
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
      contacts:{
        phone: string,
        linkedin: string
      }
    }>
  >;
}

export interface IUserResume {
    about: string;
    name: string;
    education: IUserEducation[]
    experience: {
        title: string;
        companyName: string;
        location: string;
        description: string;
        startDay: string;
        endDay: string;
        id: string;
        }[]
    skills: {
      skillsName: [] | ISkill[];
      skillsInfo: [] | string[]
    }
    contacts:{
      phone: string,
      linkedin: string
    }
}

export interface IUserEducation{
  university: string;
  diploma: string;
  startDay: string;
  endDay: string;
  id: string;
}
