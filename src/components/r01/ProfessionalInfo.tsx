import React from "react";
import { About, ProfessionalSkills, WorkExperience } from ".";

const ProfessionalInfo: React.FC = () => {
  return (
    <div className="bg-white w-2/3 pt-10 pb-8 px-8">
      <About />
      <WorkExperience />
      <ProfessionalSkills />
    </div>
  );
};

export { ProfessionalInfo };
