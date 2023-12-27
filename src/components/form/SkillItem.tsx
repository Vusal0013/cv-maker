import React, { useEffect, useState } from "react";
import { Input, InputError } from ".";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { ILanguageSkill, IProfessionalSkills } from "../../types";
import {
  ErrorMessage,
  FieldConfig,
  FieldHelperProps,
  FieldInputProps,
  FieldMetaProps,
} from "formik";
import classNames from "classnames";

interface ISkillItem {
  language: boolean;
  handlePush: <X = any>(obj: X) => () => void;
  handleRemove: (index: number) => () => void;
  getFieldMeta: <Value>(name: string) => FieldMetaProps<Value>;
  getFieldHelpers: <Value = any>(name: string) => FieldHelperProps<Value>;
  getFieldProps: <Value = any>(
    props: string | FieldConfig<Value>
  ) => FieldInputProps<Value>;
  fieldName: string;
  index: number;
  fieldValue: ILanguageSkill | IProfessionalSkills;
}

const SkillItem: React.FC<ISkillItem> = ({
  language,
  handleRemove,
  handlePush,
  getFieldHelpers,
  getFieldMeta,
  getFieldProps,
  index,
  fieldName,
  fieldValue,
}) => {
  const field = (childField: string) => {
    return getFieldProps(`${fieldName}[${index}].${childField}`);
  };

  const meta = (childField: string) => {
    return getFieldMeta(field(childField).name);
  };

  const helpers = (childField: string) => {
    return getFieldHelpers(field(childField).name);
  };

  const [percent, setPercent] = useState<string>(field("proficiency").value);

  const [rangeInputFocus, setRangeInputFocus] = useState<boolean>(false);

  useEffect(() => {
    helpers("proficiency").setValue(percent);
  }, [percent]);

  return (
    <div className="w-full relative">
      <div className="relative">
        <div
          onClick={handleRemove(index)}
          className="absolute py-1 -right-6 top-0 text-[#cf4343] cursor-pointer"
        >
          <IoIosRemoveCircleOutline size={20} />
        </div>
        <Input
          name={`${fieldName}[${index}].${language ? "language" : "skillName"}`}
          placeholder={language ? "Language" : "Skill"}
        />
      </div>
      <div className="relative">
        <div className="flex flex-col h-4 bg-gray-50 relative overflow-hidden border-2 border-[#cdcdcd] mt-1">
          <input
            list="percent-list"
            onFocus={() => setRangeInputFocus(true)}
            onBlur={() => setRangeInputFocus(false)}
            onChange={(e) => setPercent(e.target.value)}
            type="range"
            className="w-full opacity-0 z-10 cursor-pointer"
            min={0}
            max={100}
            step={1}
          />
          <div
            style={{ width: `${percent}%` }}
            className="absolute bg-gradient-to-r from-[#81abee] to-[#362a3d] h-full border"
          ></div>
        </div>
        <div className="relative">
          <datalist className="flex justify-between text-xs" id="percent-list">
            <option
              onClick={(e) => setPercent((e.target as HTMLOptionElement).value)}
              className="cursor-pointer"
              value="0"
            >
              0%
            </option>
            <option
              onClick={(e) => setPercent((e.target as HTMLOptionElement).value)}
              className="cursor-pointer"
              value="25"
            >
              25%
            </option>
            <option
              onClick={(e) => setPercent((e.target as HTMLOptionElement).value)}
              className="cursor-pointer"
              value="50"
            >
              50%
            </option>
            <option
              onClick={(e) => setPercent((e.target as HTMLOptionElement).value)}
              className="cursor-pointer"
              value="75"
            >
              75%
            </option>
            <option
              onClick={(e) => setPercent((e.target as HTMLOptionElement).value)}
              className="cursor-pointer"
              value="100"
            >
              100%
            </option>
          </datalist>
          <div
            className={classNames({
              "w-0 h-0.5 absolute left-0 -bottom-1 transition-all duration-500":
                true,
              "bg-[#cf4343] w-full":
                meta("proficiency").touched && meta("proficiency").error,
              "bg-[#60af68]": rangeInputFocus,
              "w-full": rangeInputFocus,
            })}
          />
        </div>
        <ErrorMessage
          name={`${fieldName}[${index}].proficiency`}
          children={(m) => <InputError children={m} />}
        />
      </div>
    </div>
  );
};

export { SkillItem };
