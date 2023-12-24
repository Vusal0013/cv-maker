import React from "react";
import { ResumeForm } from "./";
const FormPage: React.FC = () => {
  return (
    <div className="flex flex-col font-form bg-form bg-cover bg-center w-full min-h-screen">
      <div className="w-full h-full text-sm md:text-base">
        <ResumeForm />
      </div>
    </div>
  );
};

export { FormPage };
