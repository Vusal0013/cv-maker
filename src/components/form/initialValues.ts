import { IFormType } from "../../types";

export const initialValues: IFormType = {
  personalInfo: {
    profileInfo: {
      profilePhoto: {
        src: "",
        isRequired: true,
      },
      firstName: "",
      lastName: "",
      profession: "",
      birthDate: {
        isRequired: true,
        day: "",
        month: "Yanvar",
        year: "",
      },
    },
    contactInfo: {
      email: "",
      phone: "",
      address: "",
    },
    educationHistory: [
      {
        startDate: "",
        endDate: "",
        university: "",
        profession: "",
      },
      {
        startDate: "",
        endDate: "",
        university: "",
        profession: "",
      },
    ],
    languageSkills: [
      {
        language: "",
        proficiency: "",
      },
      {
        language: "",
        proficiency: "",
      },
    ],
  },
  professionalInfo: {
    about: ["", ""],
    workExperience: [
      {
        startDate: "",
        endDate: "",
        company: "",
        profession: "",
        responsibilities: "",
      },
      {
        startDate: "",
        company: "",
        profession: "",
        responsibilities: "",
      },
    ],
    skills: [
      {
        skillName: "",
        proficiency: "",
      },
      {
        skillName: "",
        proficiency: "",
      },
      {
        skillName: "",
        proficiency: "",
      },
    ],
  },
};
