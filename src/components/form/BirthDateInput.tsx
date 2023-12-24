import React from "react";
import classNames from "classnames";

import { IBirthDateInput, IBirthDateInputRef } from "../../types";

const BirthDateInput = React.forwardRef<IBirthDateInputRef, IBirthDateInput>(
  (
    {
      dataType,
      open,
      handleSetOpen,
      date,
      handleClickSetDate,
      iterableArray,
      disabled,
    },
    ref
  ) => {
    const typeClassname = {
      day: "relative w-3/12",
      month: "relative w-6/12",
      year: "relative w-4/12",
    };

    return (
      <div ref={ref} className={`${typeClassname[dataType]} relative`}>
        <div
          onClick={() => handleSetOpen(dataType)}
          id={dataType}
          className={classNames({
            "w-full pr-6 py-1 px-2 bg-gray-50 border-2 outline-none border-[#cdcdcd] cursor-pointer":
              true,
            "text-[#2e2e2e]": !disabled,
            "text-[#999] pointer-events-none": disabled,
          })}
        >
          {date[dataType]}
        </div>
        {open[dataType] && (
          <div className="absolute w-full h-32 mt-1.5 overflow-y-scroll overflow-x-hidden scroll-smooth">
            {iterableArray.map((item, i) => {
              return (
                <div
                  onClick={() => {
                    handleSetOpen();
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
        <div
          className={classNames({
            "w-0 h-0.5 absolute left-0 -bottom-1 transition-all duration-500":
              true,
            "bg-[#60af68] w-full": open[dataType],
            "bg-[#cf4343] w-full": disabled,
          })}
        />
      </div>
    );
  }
);

export { BirthDateInput };
