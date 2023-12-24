export interface IBirthDate {
  date?: string;
  isRequired: boolean;
}

export interface IProfileInfo {
  profilePhoto?: {
    file?: File | null;
    src?: string;
    isRequired: boolean;
  };
  firstName: string;
  lastName: string;
  profession?: string;
  birthDate: IBirthDate;
}
export interface IContactInfo {
  email: string;
  phone: string;
  address?: string;
}

export interface IEducation {
  startDate: string;
  endDate?: string;
  currently?: boolean;
  university: string;
  profession?: string;
}

export interface ILanguageSkill {
  language: string;
  proficiency: string;
}

export interface IPersonalInfo {
  profileInfo: IProfileInfo;
  contactInfo: IContactInfo;
  educationHistory: IEducation[];
  languageSkills: ILanguageSkill[];
}

export interface IWorkExperience {
  startDate: string;
  endDate?: string;
  currently: boolean;
  company: string;
  profession?: string;
  responsibilities: string;
}

export interface IProfessionalSkills {
  skillName: string;
  proficiency: string;
}

export interface IProfessionalInfo {
  about: string[];
  workExperience: IWorkExperience[];
  skills: IProfessionalSkills[];
}

export type ICompletedStep = { [key: number]: boolean };

export interface IFormType {
  stepper?: {
    steps: number;
    currentStep: number;
    completedStep: ICompletedStep;
  };
  personalInfo: IPersonalInfo;
  professionalInfo: IProfessionalInfo;
}
