import {ReactNode} from 'react'

export interface IResume {
    about: IAbout |[];
    contacts: {
        text: string; type: string; href: string; 
    }[]|[];
    education: IEducation[]|[];
    experience: IResumeInfo[]|[];
    skills: ISkillsInfo;
}

export type IAbout=string[]
export interface IResumeInfo {
    title: string;
    companyName: string;
    location?: string;
    description?: string[];
    date?: string;
}
  
export interface ISkillsInfo {
    skillsName: ISkill[]| [];
    skillsInfo: string[]| [];
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
    about: string[];
    education: IEducationForm[];
}
  
export interface IEducationForm {
    university: string;
    diploma: string;
    startDay: string;
    endDay: string;
}