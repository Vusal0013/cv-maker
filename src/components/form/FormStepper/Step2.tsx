import React from "react";
import { Experience, Skills } from "..";
import {
  FieldConfig,
  FieldHelperProps,
  FieldInputProps,
  FieldMetaProps,
} from "formik";
import { IFormType } from "../../../types";

interface IStep2Props {
  values: IFormType;
  getFieldMeta: <Value>(name: string) => FieldMetaProps<Value>;
  getFieldHelpers: <Value = any>(name: string) => FieldHelperProps<Value>;
  getFieldProps: <Value = any>(
    props: string | FieldConfig<Value>
  ) => FieldInputProps<Value>;
}

const Step2: React.FC<IStep2Props> = ({
  values,
  getFieldHelpers,
  getFieldMeta,
  getFieldProps,
}) => {
  return (
    <>
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
    </>
  );
};

export { Step2 };
