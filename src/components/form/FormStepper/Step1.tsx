import React from "react";
import { BirthDate, Checkbox, Input, PhotoFile } from "..";
import { FormikErrors } from "formik";
import { IFormType } from "../../../types";

interface IStep1Props {
  values: IFormType;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void | FormikErrors<IFormType>>;
}

const Step1: React.FC<IStep1Props> = ({ values, setFieldValue }) => {
  return (
    <>
      {" "}
      <div className="w-full flex flex-col justify-center items-center">
        {values.personalInfo.profileInfo.profilePhoto?.isRequired && (
          <PhotoFile
            valueFile={values.personalInfo.profileInfo.profilePhoto.file}
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
        <BirthDate name={"personalInfo.profileInfo.birthDate.date"} />
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
    </>
  );
};

export { Step1 };
