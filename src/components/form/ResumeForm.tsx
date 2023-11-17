import React from "react";
import { Form, Formik } from "formik";
import { IFormType } from "../../types/formDataType";
import { Input } from "./";
import { PhotoFile } from "./PhotoFile";
import { BirthDate } from "./";

const initialValues: IFormType = {
  personalInfo: {
    profileInfo: {
      profilePhoto: "",
      firstName: "",
      lastName: "",
      profession: "",
      birthDate: {
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

const ResumeForm: React.FC = () => {
  return (
    <Formik
      onSubmit={(val: IFormType) => console.log(val)}
      initialValues={initialValues}
    >
      {({ values }) => (
        <Form>
          <PhotoFile
            name="personalInfo.profileInfo.profilePhoto"
            label="Profile Photo"
          />
          <div className="w-48 m-5">
            <Input
              label={"First Name"}
              name={"personalInfo.profileInfo.firstName"}
            />
            <Input
              label={"Last Name"}
              name={"personalInfo.profileInfo.lastName"}
            />
          </div>
          <BirthDate {...values} />
        </Form>
      )}
    </Formik>
  );
};

export { ResumeForm };
