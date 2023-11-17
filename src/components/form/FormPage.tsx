import React from "react";
import { ResumeForm } from "./";
import { Stepper } from "./Stepper";
const FormPage: React.FC = () => {
  return (
    <div className="flex flex-col font-form">
      {/* <Stepper steps={5} /> */}
      <div className="bg-slate-400 w-full h-20">
        <ResumeForm />
      </div>
    </div>
  );
};

export { FormPage };
