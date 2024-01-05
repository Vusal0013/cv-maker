import React from "react";
import { Experience, Skills } from "..";
import {
  FieldConfig,
  FieldHelperProps,
  FieldInputProps,
  FieldMetaProps,
} from "formik";
import { IFormType } from "../../../types";

interface IStep4Props {
  values: IFormType;
  getFieldMeta: <Value>(name: string) => FieldMetaProps<Value>;
  getFieldHelpers: <Value = any>(name: string) => FieldHelperProps<Value>;
  getFieldProps: <Value = any>(
    props: string | FieldConfig<Value>
  ) => FieldInputProps<Value>;
}

const Step4: React.FC<IStep4Props> = ({
  values,
  getFieldHelpers,
  getFieldMeta,
  getFieldProps,
}) => {
  return (
    <>
      <Experience
        work
        fieldName="professionalInfo.workExperience"
        values={values.professionalInfo.workExperience}
        getFieldMeta={getFieldMeta}
        getFieldHelpers={getFieldHelpers}
        getFieldProps={getFieldProps}
      />
      <Skills
        fieldName="professionalInfo.skills"
        values={values.professionalInfo.skills}
        getFieldMeta={getFieldMeta}
        getFieldHelpers={getFieldHelpers}
        getFieldProps={getFieldProps}
      />
    </>
  );
};

export { Step4 };
