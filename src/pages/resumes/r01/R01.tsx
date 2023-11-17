import React from "react";
import { PersonalInfo, ProfessionalInfo } from "../../../components/r01/";

const R01: React.FC = () => {
  return (
    <div className="bg-[lightblue] flex flex-col justify-center items-center min-h-screen min-w-[64rem] font-r01">
      <div className="w-full max-w-5xl min-h-screen bg-white flex shadow-2xl m-12">
        <PersonalInfo />
        <ProfessionalInfo />
      </div>
    </div>
  );
};

export { R01 };
