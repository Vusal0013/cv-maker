import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

interface IStepper {
  steps: number;
}

const Stepper: React.FC<IStepper> = ({ steps }) => {
  return (
    <div className="w-full">
      <header className="flex justify-center items-center gap-12">
        {Array.from({ length: steps }, (_, i) => i + 1).map((n, i) => (
          <div
            key={n + i}
            className="flex justify-center items-center font-bold text-slate-500 text-lg w-12 h-12 bg-blue-800 rounded-full"
          >
            <FaCircleCheck size={18} />
            {/* {n} */}
          </div>
        ))}
      </header>
    </div>
  );
};

export { Stepper };
