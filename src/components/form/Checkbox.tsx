import { FieldHookConfig, useField } from "formik";
import React from "react";
import { FaCheck } from "react-icons/fa6";

interface ICheckbox {
  label: string;
}

const Checkbox: React.FC<ICheckbox & FieldHookConfig<any>> = ({
  label,
  ...props
}) => {
  const [field, , helpers] = useField(props);

  const handleSetVal = () => {
    helpers.setValue(!field.value);
  };
  return (
    <div className="flex justify-start w-full gap-2 items-center">
      <div
        onClick={handleSetVal}
        className="bg-white w-5 h-5 flex justify-center items-center border-[cdcdcd] border-2 text-[#2e2e2e]"
      >
        {!field.value && <FaCheck size={13} />}
      </div>
      {label && (
        <label className="select-none" onClick={handleSetVal}>
          {label}
        </label>
      )}
    </div>
  );
};

export { Checkbox };
