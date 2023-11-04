import React from "react";
import { IProfessionalSkills } from "../../form/formType";
import { SkillsProficiency } from ".";

const ProfessionalSkillItem: React.FC<IProfessionalSkills> = ({
  proficiency,
  skillName,
}) => {
  return (
    <div className="mb-5 flex w-full flex-row items-center">
      {/* <img src={"as"} alt={skillName} className="w-7 mr-2" /> */}
      <h4 className="uppercase text-[#848c99] font-medium min-w-[9.375rem]">
        {skillName}
      </h4>
      <SkillsProficiency proficiency={proficiency} />
    </div>
  );
};

export { ProfessionalSkillItem };
