import React from "react";
import { LanguageSkillItem } from ".";
import useDataFiller from "../../hooks/useDataFiller";

const LanguageSkills: React.FC = () => {
  const { languageSkills } = useDataFiller((data) => data.personalInfo);

  return (
    <div className="pt-7">
      <h3 className="text-white uppercase font-semibold tracking-wider mb-4 text-lg">
        DİL BİLİKLƏRİ
      </h3>
      <ul>
        {Array.isArray(languageSkills) ? (
          languageSkills.map(({ language, proficiency }) => (
            <LanguageSkillItem
              key={language + proficiency}
              language={language}
              proficiency={proficiency}
            />
          ))
        ) : (
          <LanguageSkillItem
            key={languageSkills.language + languageSkills.proficiency}
            language={languageSkills.language}
            proficiency={languageSkills.proficiency}
          />
        )}
      </ul>
    </div>
  );
};

export { LanguageSkills };
