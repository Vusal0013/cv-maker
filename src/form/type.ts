export interface ProfileInfo {
  profilePhoto: string;
  fullname: string;
  profession: string;
}
export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
}

export interface Education {
  startDate: string;
  endDate?: string;
  university: string;
  profession: string;
}

export interface LanguageSkill {
  language: string;
  proficiency: string;
}

export interface PersonalInfo {
  profileInfo: ProfileInfo;
  contactInfo: ContactInfo;
  educationHistory: Education | Education[];
  languageSkills: LanguageSkill | LanguageSkill[];
}

export interface WorkExperience {
  startDate: string;
  endDate?: string;
  company: string;
  profession: string;
  responsibilities: string;
}

export interface ProfessionalSkills {
  skillName: string;
  proficiency: string;
}

export interface ProfessionalInfo {
  about: string | string[];
  workExperience: WorkExperience | WorkExperience[];
  skills: ProfessionalSkills | ProfessionalSkills[];
}
export interface DemoForm {
  personalInfo: PersonalInfo;
  professionalInfo: ProfessionalInfo;
}
