import React, { useEffect, useState } from "react";

import DatePickerInput from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import classNames from "classnames";
import {
  ErrorMessage,
  FieldConfig,
  FieldHelperProps,
  FieldInputProps,
  FieldMetaProps,
  FormikProps,
} from "formik";

import { IEducation, IFormType, IWorkExperience } from "../../types";

import { BiSolidCheckCircle, BiSolidErrorCircle } from "react-icons/bi";
import { FaCheck } from "react-icons/fa6";
import { InputError } from ".";

interface IDatePicker {
  lastIndex: number;
  index: number;
  fieldName: string;
  fieldValue: IEducation | IWorkExperience;
  formValues: FormikProps<IFormType>;
  getFieldMeta: <Value>(name: string) => FieldMetaProps<Value>;
  getFieldHelpers: <Value = any>(name: string) => FieldHelperProps<Value>;
  getFieldProps: <Value = any>(
    props: string | FieldConfig<Value>
  ) => FieldInputProps<Value>;
}

const DatePicker: React.FC<IDatePicker> = ({
  fieldValue,
  lastIndex,
  index,
  formValues,
  getFieldMeta,
  getFieldHelpers,
  getFieldProps,
  fieldName,
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

  const stringToDate = (str: string | null) => {
    const splitStr = str && str.split(".");
    if (str && splitStr) {
      return new Date(`${splitStr[0]}.01.${splitStr[1]}`);
    } else return null;
  };

  const [inputFocus, setInputFocus] = useState<{
    startDate: boolean;
    endDate: boolean;
  }>({ startDate: false, endDate: false });

  const handleCurrentWork = () => {
    setCurrentWork((prev) => !prev);
  };

  const [currentWork, setCurrentWork] = useState<boolean>(false);

  const [date, setDate] = useState<{
    startDate: Date | null;
    endDate: Date | null;
  }>({
    startDate: stringToDate(fieldValue.startDate),
    endDate: stringToDate(fieldValue.endDate ? fieldValue.endDate : null),
  });

  const dateToString = (date: Date | null) => {
    if (date) {
      const [, monthNumber, year] = date.toLocaleDateString("ru").split(".");

      return `${monthNumber}.${year}`;
    } else return null;
  };

  useEffect(() => {
    formValues.setFieldValue(
      field("startDate").name,
      dateToString(date.startDate) ?? ""
    );
    formValues.setFieldValue(
      field("endDate").name,
      dateToString(date.endDate) ?? ""
    );
  }, [date, currentWork]);

  useEffect(() => {
    if (currentWork) setDate((prev) => ({ ...prev, endDate: null }));
  }, [currentWork]);

  useEffect(() => {
    if (lastIndex !== index) {
      setCurrentWork(false);
    }
  }, [lastIndex]);

  return (
    <div className="flex flex-col justify-center items-center w-full gap-1">
      <div className="flex justify-center items-start w-full gap-1">
        <div
          className={classNames({
            relative: true,
            "w-[50%]": !currentWork,
            "w-full": currentWork,
          })}
        >
          <div className="relative">
            <DatePickerInput
              name={field("startDate").name}
              onFocus={() =>
                setInputFocus((prev) => ({ ...prev, startDate: true }))
              }
              onBlur={() => {
                setInputFocus((prev) => ({ ...prev, startDate: false })),
                  helpers("startDate").setTouched(true);
              }}
              popperClassName="min-w-[250px]"
              wrapperClassName="w-full"
              className={classNames({
                "w-full pr-6 py-1 px-2 bg-gray-50 text-[#2e2e2e] border-2 outline-none border-[#cdcdcd]":
                  true,
                "text-center": currentWork,
              })}
              selected={stringToDate(fieldValue.startDate)}
              onChange={(date) =>
                setDate((prev) => ({ ...prev, startDate: date }))
              }
              dateFormat="MM.yyyy"
              showMonthYearPicker
              placeholderText="StartDate"
              maxDate={date.endDate ?? new Date()}
            />

            <>
              {meta("startDate").touched && (
                <div
                  className={classNames({
                    "absolute right-0 top-0 h-full w-9 flex justify-center items-center text-lg":
                      true,
                    "text-[#cf4343]": meta("startDate").error,
                    "text-[#60af68]": !meta("startDate").error,
                  })}
                >
                  {meta("startDate").error ? (
                    <BiSolidErrorCircle />
                  ) : (
                    <BiSolidCheckCircle />
                  )}
                </div>
              )}
              <div
                className={classNames({
                  "w-0 h-0.5 absolute left-0 -bottom-1 transition-all duration-500":
                    true,
                  "bg-[#cf4343] w-full":
                    meta("startDate").touched && meta("startDate").error,
                  "bg-[#60af68]": inputFocus.startDate,
                  "w-full": inputFocus.startDate,
                })}
              />
            </>
          </div>
          <ErrorMessage
            name={field("startDate").name}
            children={(m) => <InputError children={m} />}
          />
        </div>
        {!currentWork && (
          <div className="relative w-[50%]">
            <div className="relative">
              <DatePickerInput
                name={field("endDate").name}
                onFocus={() =>
                  setInputFocus((prev) => ({ ...prev, endDate: true }))
                }
                onBlur={() => {
                  {
                    setInputFocus((prev) => ({ ...prev, endDate: false })),
                      helpers("endDate").setTouched(true);
                  }
                }}
                popperClassName="min-w-[250px]"
                wrapperClassName="w-full"
                className="w-full pr-6 py-1 px-2 bg-gray-50 text-[#2e2e2e] border-2 outline-none border-[#cdcdcd]"
                selected={stringToDate(
                  fieldValue.endDate ? fieldValue.endDate : null
                )}
                onChange={(date) =>
                  setDate((prev) => ({ ...prev, endDate: date }))
                }
                dateFormat="MM.yyyy"
                placeholderText="EndDate"
                showMonthYearPicker
                maxDate={new Date()}
                minDate={date.startDate}
                disabled={!date.startDate}
              />
              <>
                {meta("endDate").touched && (
                  <div
                    className={classNames({
                      "absolute right-0 top-0 h-full w-9 flex justify-center items-center text-lg":
                        true,
                      "text-[#cf4343]": meta("endDate").error,
                      "text-[#60af68]": !meta("endDate").error,
                    })}
                  >
                    {meta("endDate").error ? (
                      <BiSolidErrorCircle />
                    ) : (
                      <BiSolidCheckCircle />
                    )}
                  </div>
                )}
                <div
                  className={classNames({
                    "w-0 h-0.5 absolute left-0 -bottom-1 transition-all duration-500":
                      true,
                    "bg-[#cf4343] w-full":
                      meta("endDate").touched && meta("endDate").error,
                    "bg-[#60af68]": inputFocus.endDate,
                    "w-full": inputFocus.endDate,
                  })}
                />
              </>
            </div>
            <ErrorMessage
              name={field("endDate").name}
              children={(m) => <InputError children={m} />}
            />
          </div>
        )}
      </div>

      {lastIndex === index && (
        <div className="flex justify-start w-full gap-2 items-center">
          <div
            onClick={handleCurrentWork}
            className="bg-white w-5 h-5 flex justify-center items-center border-[cdcdcd] border-2 text-[#2e2e2e]"
          >
            {currentWork && <FaCheck size={13} />}
          </div>

          <label className="select-none" onClick={handleCurrentWork}>
            Hal-hazırda burada çalışıram
          </label>
        </div>
      )}
    </div>
  );
};

export { DatePicker };
