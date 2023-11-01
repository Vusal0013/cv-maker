import React from "react";
import { ContactInfo, EducationInfo, LanguageSkills, ProfileInfo } from ".";

const PersonalInfo: React.FC = () => {
  return (
    <div className="bg-[#003147] w-1/3 p-8">
      <ProfileInfo />
      <ContactInfo />
      <EducationInfo />
      <LanguageSkills />
    </div>
  );
};

export { PersonalInfo };
