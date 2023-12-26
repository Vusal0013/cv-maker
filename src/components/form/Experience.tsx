import {
  FieldArray,
  FieldConfig,
  FieldHelperProps,
  FieldInputProps,
  FieldMetaProps,
} from "formik";
import React from "react";
import { ExperienceItem } from ".";
import { IEducation, IWorkExperience } from "../../types";

interface IExperience {
  work?: boolean;
  values: IEducation[] | IWorkExperience[];
  fieldName: string;
  getFieldMeta: <Value>(name: string) => FieldMetaProps<Value>;
  getFieldHelpers: <Value = any>(name: string) => FieldHelperProps<Value>;
  getFieldProps: <Value = any>(
    props: string | FieldConfig<Value>
  ) => FieldInputProps<Value>;
}

const Experience: React.FC<IExperience> = ({
  work,
  getFieldMeta,
  getFieldHelpers,
  getFieldProps,
  values,
  fieldName,
}) => {
  const pushedData: IEducation | IWorkExperience = work
    ? {
        startDate: "",
        endDate: "",
        currently: false,
        company: "",
        profession: "",
        responsibilities: "",
      }
    : {
        startDate: "",
        endDate: "",
        currently: false,
        university: "",
        profession: "",
      };

  return (
    <div>
      <FieldArray name={`${fieldName}`}>
        {({ handleRemove, handlePush, name, form }) => {
          return (
            <div className="w-full flex flex-col justify-center items-center gap-3">
              {values.map((fieldValue, i) => (
                <ExperienceItem
                  getFieldMeta={getFieldMeta}
                  getFieldHelpers={getFieldHelpers}
                  getFieldProps={getFieldProps}
                  handleRemove={handleRemove}
                  key={fieldValue.startDate + String(i)}
                  formValues={form}
                  fieldName={name}
                  fieldValue={fieldValue}
                  work={work}
                  index={i}
                  lastIndex={values.length - 1}
                />
              ))}
              <button
                type="button"
                onClick={handlePush<IEducation | IWorkExperience>(pushedData)}
                className="w-full pr-6 py-1 px-2 bg-gray-50 text-[#2e2e2e] border-2 outline-none border-[#cdcdcd]"
              >
                Əlavə et
              </button>
            </div>
          );
        }}
      </FieldArray>
    </div>
  );
};

export { Experience };
