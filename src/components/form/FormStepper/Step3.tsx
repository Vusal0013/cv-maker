import { FieldArray } from "formik";
import React from "react";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { Textarea } from "..";
import { IFormType } from "../../../types";

interface IStep3Props {
  values: IFormType;
}

const Step3: React.FC<IStep3Props> = ({ values }) => {
  return (
    <>
      <FieldArray name="professionalInfo.about">
        {({ handlePush, handleRemove, name }) => {
          return (
            <div>
              {values.professionalInfo.about.map((_, index) => (
                <div key={name + index} className="relative">
                  <div
                    onClick={handleRemove(index)}
                    className="absolute py-1 -right-6 top-0 text-[#cf4343] cursor-pointer"
                  >
                    <IoIosRemoveCircleOutline size={20} />
                  </div>
                  <Textarea name={`${name}[${index}]`} />
                </div>
              ))}
              {values.professionalInfo.about.length < 3 && (
                <button onClick={handlePush("")} type="button">
                  add
                </button>
              )}
            </div>
          );
        }}
      </FieldArray>
    </>
  );
};

export { Step3 };
