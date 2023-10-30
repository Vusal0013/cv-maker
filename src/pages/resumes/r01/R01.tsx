import React from "react";
import { PersonalInfo, ProfessionalInfo } from "../../../components/r01/";

const R01: React.FC = () => {
  return (
    <div className="bg-[lightblue] flex flex-col justify-center items-center min-h-screen w-full">
      <div className="w-full max-w-[100rem] min-h-[50rem] bg-white flex shadow-[0_3.5rem_5.5rem_rgba(0,0,0,0.2)] m-20">
        <PersonalInfo />
        <ProfessionalInfo />
      </div>
    </div>
  );
};

export { R01 };
