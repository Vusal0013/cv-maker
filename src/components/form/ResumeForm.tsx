import React from "react";
import { Form, Formik } from "formik";
import { initialValues, validationSchema } from ".";
import { IFormType } from "../../types/formDataType";
import { Checkbox, Input } from "./";
import { PhotoFile } from "./PhotoFile";
import { BirthDate } from "./";

// const stringValidation = "Vacibdir";
// const validationSchema = {
//   personalInfo: {
//     profileInfo: {
//       profilePhoto: Yup.string().notRequired(),
//       firstName: Yup.string().required(stringValidation),
//       lastName: Yup.string().required(stringValidation),
//       profession: Yup.string().notRequired(),
//       birthDate: {
//         isRequired: Yup.boolean(),
//         day: Yup.string().when(
//           "isRequired",
//           {
//             is: false,
//             then(schema) {
//               return schema.required();
//             },
//             otherwise(schema) {
//               return schema.notRequired();
//             },
//           }
//         ),
//         month: Yup.string().when(
//           "isRequired",
//           {
//             is: false,
//             then(schema) {
//               return schema.required();
//             },
//             otherwise(schema) {
//               return schema.notRequired();
//             },
//           }
//         ),
//         year: Yup.string().when(
//           "isRequired",
//           {
//             is: false,
//             then(schema) {
//               return schema.required();
//             },
//             otherwise(schema) {
//               return schema.notRequired();
//             },
//           }
//         ),
//       },
//     },
//     contactInfo: {
//       email: Yup.string().required(),
//       phone: Yup.string().required(),
//       address: Yup.string().optional(),
//     },
//     educationHistory: [
//       {
//         startDate: Yup.string().required(),
//         endDate: Yup.string().optional(),
//         university: Yup.string().required(),
//         profession: Yup.string().optional(),
//       },
//       {
//         startDate: "",
//         endDate: "",
//         university: "",
//         profession: "",
//       },
//     ],
//     languageSkills: [
//       {
//         language: "",
//         proficiency: "",
//       },
//       {
//         language: "",
//         proficiency: "",
//       },
//     ],
//   },
//   professionalInfo: {
//     about: ["", ""],
//     workExperience: [
//       {
//         startDate: "",
//         endDate: "",
//         company: "",
//         profession: "",
//         responsibilities: "",
//       },
//       {
//         startDate: "",
//         company: "",
//         profession: "",
//         responsibilities: "",
//       },
//     ],
//     skills: [
//       {
//         skillName: "",
//         proficiency: "",
//       },
//       {
//         skillName: "",
//         proficiency: "",
//       },
//       {
//         skillName: "",
//         proficiency: "",
//       },
//     ],
//   },
// };

const ResumeForm: React.FC = () => {
  return (
    <Formik
      onSubmit={(val: IFormType) => console.log(val)}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {({ values }) => (
        <Form>
          <div>
            {values.personalInfo.profileInfo.profilePhoto?.isRequired && (
              <PhotoFile
                name="personalInfo.profileInfo.profilePhoto.src"
                label="Profile Photo"
              />
            )}
            <Checkbox
              label="Şəkil yükləmək istəmirəm"
              name="personalInfo.profileInfo.profilePhoto.isRequired"
            />
          </div>

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
          <Checkbox
            name="personalInfo.profileInfo.birthDate.isRequired"
            label="Doğum tarixi qeyd etmək istəmirəm"
            type="checkbox"
          />

          {values.personalInfo.profileInfo.birthDate.isRequired && (
            <BirthDate />
          )}
        </Form>
      )}
    </Formik>
  );
};

export { ResumeForm };
