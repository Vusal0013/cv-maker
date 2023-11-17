import React, { useState } from "react";
import { ErrorMessage, FieldHookConfig, useField } from "formik";
import { InputError } from "./";
import { BiSolidErrorCircle, BiSolidCheckCircle } from "react-icons/bi";
import classNames from "classnames";

export type IInput = {
  label?: string;
};

const Input: React.FC<IInput & FieldHookConfig<any>> = ({
  label,
  type,
  ...props
}) => {
  const [field, meta] = useField(props);

  const [inputFocus, setInputFocus] = useState<boolean>(false);

  return (
    <div className="relative w-full">
      <label
        className="text-[#2e2e2e] text-xs font-normal"
        htmlFor={field.name}
      >
        {label}
      </label>
      <div className="relative">
        <input
          className="w-full pr-6 py-1 px-2 bg-gray-50 text-[#2e2e2e] border-2 outline-none border-[#cdcdcd]"
          id={field.name}
          type={type ?? "text"}
          {...field}
          value={props.value}
          onFocus={() => setInputFocus(true)}
          onBlur={() => setInputFocus(false)}
        />
        {meta.touched && (
          <div
            className={classNames({
              "absolute right-0 top-0 h-full w-9 flex justify-center items-center text-lg":
                true,
              "text-[#cf4343]": meta.error,
              "text-[#60af68]": !meta.error,
            })}
          >
            {meta.error ? <BiSolidErrorCircle /> : <BiSolidCheckCircle />}
          </div>
        )}
        <div
          className={classNames({
            "w-0 h-0.5 absolute left-0 -bottom-1 transition-all duration-500":
              true,
            "bg-[#cf4343]": meta.error,
            "bg-[#60af68]": !meta.error,
            "w-full": inputFocus,
          })}
        />
      </div>
      <ErrorMessage name={field.name} component={InputError} />
    </div>
  );
};

export { Input };
