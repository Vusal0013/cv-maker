import React from "react";

import { IoIosRemoveCircleOutline } from "react-icons/io";

import { DatePicker, Input, Textarea } from ".";
import { IEducation, IFormType, IWorkExperience } from "../../types";
import {
  FieldConfig,
  FieldHelperProps,
  FieldInputProps,
  FieldMetaProps,
  FormikProps,
} from "formik";

const ExperienceItem: React.FC<{
  work?: boolean;
  lastIndex: number;
  index: number;
  remove: <X = any>(index: number) => X | undefined;
  fieldValue: IEducation | IWorkExperience;
  fieldName: string;
  formValues: FormikProps<IFormType>;
  getFieldMeta: <Value>(name: string) => FieldMetaProps<Value>;
  getFieldHelpers: <Value = any>(name: string) => FieldHelperProps<Value>;
  getFieldProps: <Value = any>(
    props: string | FieldConfig<Value>
  ) => FieldInputProps<Value>;
}> = ({
  getFieldMeta,
  getFieldHelpers,
  getFieldProps,
  lastIndex,
  work,
  fieldValue,
  index,
  fieldName,
  formValues,
  remove,
}) => {
  const handleRemove = (i: number) => {
    remove(i);
  };

  return (
    <div className="w-full flex flex-col gap-1">
      <div className="w-full flex justify-center items-center relative">
        <div
          onClick={() => handleRemove(index)}
          className="absolute py-1 -right-6 top-0 text-[#cf4343] cursor-pointer"
        >
          <IoIosRemoveCircleOutline size={20} />
        </div>
        <DatePicker
          fieldName={fieldName}
          getFieldHelpers={getFieldHelpers}
          getFieldMeta={getFieldMeta}
          getFieldProps={getFieldProps}
          fieldValue={fieldValue}
          formValues={formValues}
          index={index}
          lastIndex={lastIndex}
        />
      </div>
      <Input
        placeholder={`${work ? "Company" : "University"}`}
        name={`${fieldName}[${index}].${work ? "company" : "university"}`}
      />
      <Input
        placeholder="Profession"
        name={`${fieldName}[${index}].profession`}
      />
      {work && (
        <Textarea
          placeholder="Gördüyün iş nədən ibarət idi?"
          name={`professionalInfo.workExperience[${index}].responsibilities`}
        />
      )}
    </div>
  );
};

export { ExperienceItem };
