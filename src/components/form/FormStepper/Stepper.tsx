import React, { useRef } from "react";
import { FaCheck } from "react-icons/fa6";
import { IStepper, IStepperHeader } from "../../../types";
import classNames from "classnames";

const Stepper: React.FC<{ children: React.ReactNode }> & IStepper = ({
  children,
}) => {
  return <>{children}</>;
};

const Header: React.FC<IStepperHeader> = ({
  currentStep,
  completedStep,
  setFieldValue,
  steps,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const stepperLineClassName = (): string => {
    const percent = 100 / (steps - 1);

    return `${(percent * (currentStep - 1)).toFixed()}%`;
  };

  return (
    <header className="flex justify-center items-center">
      <div className="flex w-full md:w-[600px] justify-between items-center gap-12 relative py-4 px-8 bg-[#00000044] rounded-md">
        <div className="w-[calc(100%-4rem)] md:w-[calc(600px-4rem)] h-1 absolute bg-slate-400">
          <div
            ref={ref}
            style={{
              width: stepperLineClassName(),
            }}
            className={`h-full w-0 bg-blue-300 transition-all`}
          ></div>
        </div>
        {Array.from({ length: steps }, (_, i) => i + 1).map((n, i) => (
          <div
            onClick={() =>
              // completedStep[n] &&
              setFieldValue("stepper.currentStep", n)
            }
            key={i + n}
            className={classNames({
              "w-6 h-6 rounded-full flex justify-center items-center bg-red-500 text-red-500 relative overflow-hidden select-none":
                true,
              "cursor-pointer": completedStep[n],
            })}
          >
            <div className="z-10">{currentStep === n ? n : <FaCheck />}</div>
            <div
              className={classNames({
                "absolute w-0 h-full left-0 bg-blue-500 transition-all delay-[100ms]":
                  true,
                "w-[100%]": n <= currentStep || completedStep[n],
              })}
            ></div>
          </div>
        ))}
      </div>
    </header>
  );
};

const Step: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex justify-center w-full">
      <div className="w-full md:w-[600px] bg-[#55555555]">
        <div className="py-4 px-8  w-full flex justify-center items-center">
          <div className="w-full md:w-3/5">{children}</div>
        </div>
      </div>
    </div>
  );
};

Stepper.Step = Step;
Stepper.Header = Header;

export { Stepper };
