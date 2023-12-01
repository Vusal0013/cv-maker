import React, { useState } from "react";
import { ErrorMessage, FieldHookConfig, useField } from "formik";
import { InputAnimation, InputError } from ".";

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
          onBlurCapture={() => setInputFocus(false)}
        />
        <InputAnimation meta={meta} focus={inputFocus} />
      </div>

      <ErrorMessage
        name={field.name}
        children={(m) => <InputError children={m} />}
      />
    </div>
  );
};

export { Input };
