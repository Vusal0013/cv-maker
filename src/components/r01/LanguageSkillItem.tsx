import React from "react";
import { SkillsProficiency } from ".";
import { ILanguageSkill } from "../../types/";

const LanguageSkillItem: React.FC<ILanguageSkill> = ({
  language,
  proficiency,
}) => {
  return (
    <li className="pb-4">
      <span className="text-white font-extralight italic;">{language}</span>
      <SkillsProficiency proficiency={proficiency} />
    </li>
  );
};

export { LanguageSkillItem };
