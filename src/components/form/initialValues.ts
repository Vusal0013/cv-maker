import { IFormType } from "../../types";

export const initialValues: IFormType = {
  //steps
  stepper: {
    completedStep: {
      1: false,
      2: false,
      3: false,
      4: false,
    },
    currentStep: 1,
    steps: 4,
  },
  //steps

  // şəxsi məlumatlar
  // step 1-2
  personalInfo: {
    // step 1
    profileInfo: {
      profilePhoto: {
        file: null,
        src: "",
        isRequired: true,
      },
      firstName: "",
      lastName: "",
      profession: "",
      birthDate: {
        isRequired: true,
        date: "",
      },
    },
    contactInfo: {
      email: "",
      phone: "",
      address: "",
    },
    // step 2
    educationHistory: [
      {
        startDate: "",
        endDate: "",
        university: "",
        profession: "",
        currently: false,
      },
    ],
    languageSkills: [
      {
        language: "",
        proficiency: "",
      },
    ],
  },
  // iş məlumatları
  // step 3-4
  professionalInfo: {
    // step 3
    about: [""],
    // step 4
    workExperience: [
      {
        startDate: "",
        endDate: "",
        company: "",
        profession: "",
        responsibilities: "",
        currently: false,
      },
    ],
    skills: [
      {
        skillName: "",
        proficiency: "",
      },
    ],
  },
};
