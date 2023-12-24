import classNames from "classnames";
import { FieldMetaProps } from "formik";
import React from "react";
import { BiSolidCheckCircle, BiSolidErrorCircle } from "react-icons/bi";
interface IInputAnimation {
  meta: FieldMetaProps<any>;
  focus: boolean;
}

const InputAnimation: React.FC<IInputAnimation> = ({ meta, focus }) => {
  return (
    <>
      {meta.touched && (
        <div
          className={classNames({
            "absolute right-0 top-0 h-full w-9 flex justify-center items-center text-lg":
              true,
            "text-[#cf4343]": meta.error,
            "text-[#60af68]": !meta.error,
          })}
        >
          {Boolean(meta.error) ? (
            <BiSolidErrorCircle />
          ) : (
            <BiSolidCheckCircle />
          )}
        </div>
      )}
      <div
        className={classNames({
          "w-0 h-0.5 absolute left-0 -bottom-0.5 transition-all duration-500":
            true,
          "bg-[#cf4343] w-full": meta.touched && meta.error,
          "bg-[#60af68]": !meta.error || focus,
          "w-full": focus,
        })}
      />
    </>
  );
};

export { InputAnimation };
