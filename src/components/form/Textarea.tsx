import React, { useState } from "react";
import { ErrorMessage, FieldHookConfig, useField } from "formik";
import { InputAnimation, InputError } from ".";

export type ITextarea = {
  label?: string;
  placeholder?: string;
};

const Textarea: React.FC<ITextarea & FieldHookConfig<any>> = ({
  label,
  placeholder,
  ...props
}) => {
  const [field, meta] = useField(props);

  const [inputFocus, setInputFocus] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-center items-center">
      <div className="relative w-full">
        {label && (
          <label
            className="text-[#2e2e2e] text-xs font-normal"
            htmlFor={field.name}
          >
            {label}
          </label>
        )}
        <div className="relative w-full h-40">
          <textarea
            placeholder={placeholder}
            className="w-full h-full resize-none pr-6 py-1 px-2 bg-gray-50 text-[#2e2e2e] border-2 outline-none border-[#cdcdcd]"
            id={field.name}
            {...field}
            value={field.value}
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
    </div>
  );
};

export { Textarea };
