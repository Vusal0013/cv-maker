import React from "react";
import classNames from "classnames";

import { IBirthDateInput, IBirthDateInputRef } from "../../types";
import { FieldHookConfig } from "formik";

const BirthDateInput = React.forwardRef<
  IBirthDateInputRef,
  IBirthDateInput & FieldHookConfig<any>
>(
  (
    {
      dataType,
      open,
      setOpen,
      handleSetOpen,
      date,
      handleClickSetDate,
      iterableArray,
    },
    ref
  ) => {
    const typeClassname = {
      day: "relative w-3/12",
      month: "relative w-6/12",
      year: "relative w-4/12",
    };

    return (
      <div ref={ref} className={typeClassname[dataType]}>
        <div
          onClick={() => setOpen(handleSetOpen(dataType))}
          id={dataType}
          className="w-full pr-6 py-1 px-2 bg-gray-50 text-[#2e2e2e] border-2 outline-none border-[#cdcdcd] cursor-pointer"
        >
          {date[dataType]}
        </div>
        {open[dataType] && (
          <div className="absolute w-full h-32 overflow-y-scroll scroll-smooth">
            {iterableArray.map((item, i) => {
              return (
                <div
                  onClick={() => {
                    setOpen(handleSetOpen());
                    handleClickSetDate(dataType, item);
                  }}
                  key={i}
                  className={classNames({
                    "w-full bg-neutral-100 cursor-pointer p-1": true,
                    "bg-neutral-400": date[dataType] === item,
                  })}
                >
                  {item}
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
);

export { BirthDateInput };
