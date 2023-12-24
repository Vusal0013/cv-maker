import React from "react";
import useDataFiller from "../../hooks/useDataFiller";
import { ProfessionalSkillItem } from ".";
import {} from "react-icons/di";

const ProfessionalSkills: React.FC = () => {
  const { skills } = useDataFiller((data) => data.professionalInfo);

  return (
    <div>
      <h2 className="text-[#003147] text-2xl font-bold uppercase tracking-wider mb-7">
        BİLİKLƏR
      </h2>
      {skills.map(({ proficiency, skillName }) => (
        <ProfessionalSkillItem
          key={proficiency + skillName}
          proficiency={proficiency}
          skillName={skillName}
        />
      ))}
    </div>
  );
};

export { ProfessionalSkills };
