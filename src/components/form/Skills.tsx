import React from "react";
import { SkillItem } from ".";
import {
  FieldArray,
  FieldConfig,
  FieldHelperProps,
  FieldInputProps,
  FieldMetaProps,
} from "formik";
import { ILanguageSkill, IProfessionalSkills } from "../../types";

interface ISkills {
  language?: boolean;
  getFieldMeta: <Value>(name: string) => FieldMetaProps<Value>;
  getFieldHelpers: <Value = any>(name: string) => FieldHelperProps<Value>;
  getFieldProps: <Value = any>(
    props: string | FieldConfig<Value>
  ) => FieldInputProps<Value>;
  values: ILanguageSkill[] | IProfessionalSkills[];
  fieldName: string;
}

const Skills: React.FC<ISkills> = ({
  language,
  getFieldMeta,
  getFieldHelpers,
  getFieldProps,
  values,
  fieldName,
}) => {
  const pushedData: ILanguageSkill | IProfessionalSkills = language
    ? {
        language: "",
        proficiency: "",
      }
    : {
        skillName: "",
        proficiency: "",
      };

  return (
    <div>
      <FieldArray name={fieldName}>
        {({ handleRemove, handlePush, name }) => (
          <>
            <div className="w-full flex flex-col justify-center items-center gap-3">
              {values.map((fieldValue, i) => (
                <SkillItem
                  language={Boolean(language)}
                  key={fieldValue + String(i)}
                  fieldName={name}
                  getFieldHelpers={getFieldHelpers}
                  getFieldMeta={getFieldMeta}
                  getFieldProps={getFieldProps}
                  handlePush={handlePush}
                  handleRemove={handleRemove}
                  index={i}
                  fieldValue={fieldValue}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handlePush<ILanguageSkill | IProfessionalSkills>(
                pushedData
              )}
              className="w-full pr-6 py-1 px-2 bg-gray-50 text-[#2e2e2e] border-2 outline-none border-[#cdcdcd]"
            >
              Əlavə et
            </button>
          </>
        )}
      </FieldArray>
    </div>
  );
};

export { Skills };
