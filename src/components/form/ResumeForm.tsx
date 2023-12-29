import React from "react";
import { FieldArray, Form, Formik } from "formik";
import {
  Experience,
  Skills,
  Textarea,
  initialValues,
  validationSchema,
} from ".";
import { IFormType } from "../../types/formDataType";
import { Checkbox, Input } from "./";
import { PhotoFile } from "./PhotoFile";
import { BirthDate } from "./";
import { Stepper } from "./Stepper";
import { IoIosRemoveCircleOutline } from "react-icons/io";

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
      {({
        values,
        setFieldValue,
        getFieldMeta,
        getFieldHelpers,
        getFieldProps,
      }) => (
        <Form>
          {values.stepper && (
            <Stepper>
              <Stepper.Header
                completedStep={values.stepper.completedStep}
                steps={values.stepper.steps}
                currentStep={values.stepper.currentStep}
                setFieldValue={setFieldValue}
              />
              {values.stepper.currentStep === 1 && (
                <Stepper.Step>
                  <div className="w-full flex flex-col justify-center items-center">
                    {values.personalInfo.profileInfo.profilePhoto
                      ?.isRequired && (
                      <PhotoFile
                        valueFile={
                          values.personalInfo.profileInfo.profilePhoto.file
                        }
                        setFieldValue={setFieldValue}
                        name="personalInfo.profileInfo.profilePhoto.src"
                        label="Profile Photo"
                      />
                    )}
                    <Checkbox
                      label="Şəkil yükləmək istəmirəm"
                      name="personalInfo.profileInfo.profilePhoto.isRequired"
                    />
                  </div>
                  <div className="w-full">
                    <Input
                      placeholder={"First Name"}
                      name={"personalInfo.profileInfo.firstName"}
                    />
                    <Input
                      placeholder={"Last Name"}
                      name={"personalInfo.profileInfo.lastName"}
                    />
                    <Input
                      placeholder={"Profession"}
                      name={"personalInfo.profileInfo.profession"}
                    />
                  </div>
                  {values.personalInfo.profileInfo.birthDate.isRequired && (
                    <BirthDate
                      name={"personalInfo.profileInfo.birthDate.date"}
                    />
                  )}
                  <Checkbox
                    name="personalInfo.profileInfo.birthDate.isRequired"
                    label="Doğum tarixi qeyd etmək istəmirəm"
                    type="checkbox"
                  />
                  <Input
                    name="personalInfo.profileInfo.contactInfo.email"
                    placeholder="Email"
                  />
                  <Input
                    name="personalInfo.profileInfo.contactInfo.phone"
                    placeholder="Phone"
                  />
                  <Input
                    name="personalInfo.profileInfo.contactInfo.adress"
                    placeholder="Adress"
                  />
                </Stepper.Step>
              )}
              {values.stepper.currentStep === 2 && (
                <Stepper.Step>
                  <Experience
                    fieldName="personalInfo.educationHistory"
                    values={values.personalInfo.educationHistory}
                    getFieldMeta={getFieldMeta}
                    getFieldHelpers={getFieldHelpers}
                    getFieldProps={getFieldProps}
                  />
                  <Skills
                    fieldName="personalInfo.languageSkills"
                    values={values.personalInfo.languageSkills}
                    getFieldMeta={getFieldMeta}
                    getFieldHelpers={getFieldHelpers}
                    getFieldProps={getFieldProps}
                    language
                  />
                  <button type="submit">submit</button>
                </Stepper.Step>
              )}
              {values.stepper.currentStep === 3 && (
                <Stepper.Step>
                  <FieldArray name="professionalInfo.about">
                    {({ handlePush, handleRemove, name }) => {
                      return (
                        <div>
                          {values.professionalInfo.about.map((_, index) => (
                            <div key={name + index} className="relative">
                              <div
                                onClick={handleRemove(index)}
                                className="absolute py-1 -right-6 top-0 text-[#cf4343] cursor-pointer"
                              >
                                <IoIosRemoveCircleOutline size={20} />
                              </div>
                              <Textarea name={`${name}[${index}]`} />
                            </div>
                          ))}
                          {values.professionalInfo.about.length < 3 && (
                            <button onClick={handlePush("")} type="button">
                              add
                            </button>
                          )}
                        </div>
                      );
                    }}
                  </FieldArray>
                </Stepper.Step>
              )}
            </Stepper>
          )}
          {
            <>
              {values.stepper && values.stepper?.currentStep > 1 && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault(),
                      setFieldValue(
                        "stepper.currentStep",
                        values.stepper && values.stepper?.currentStep - 1
                      );
                  }}
                >
                  Evvelki
                </button>
              )}
              {values.stepper?.currentStep}
              {values.stepper &&
              values.stepper.currentStep < values.stepper.steps ? (
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault(),
                      setFieldValue(
                        "stepper.currentStep",
                        values.stepper && values.stepper?.currentStep + 1
                      );
                  }}
                >
                  Növbəti
                </button>
              ) : (
                <button type="submit">Submit</button>
              )}
            </>
          }
        </Form>
      )}
    </Formik>
  );
};

export { ResumeForm };
