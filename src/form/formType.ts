export interface IProfileInfo {
  profilePhoto: string;
  fullname: string;
  profession: string;
}
export interface IContactInfo {
  email: string;
  phone: string;
  address: string;
}

export interface IEducation {
  startDate: string;
  endDate?: string;
  university: string;
  profession: string;
}

export interface ILanguageSkill {
  language: string;
  proficiency: string;
}

export interface IPersonalInfo {
  profileInfo: IProfileInfo;
  contactInfo: IContactInfo;
  educationHistory: IEducation | IEducation[];
  languageSkills: ILanguageSkill | ILanguageSkill[];
}

export interface IWorkExperience {
  startDate: string;
  endDate?: string;
  company: string;
  profession: string;
  responsibilities: string;
}

export interface IProfessionalSkills {
  skillName: string;
  proficiency: string;
}

export interface IProfessionalInfo {
  about: string | string[];
  workExperience: IWorkExperience | IWorkExperience[];
  skills: IProfessionalSkills | IProfessionalSkills[];
}
export interface IFormType {
  personalInfo: IPersonalInfo;
  professionalInfo: IProfessionalInfo;
}
