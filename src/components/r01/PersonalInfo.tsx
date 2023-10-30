import React from "react";
import { ContactInfo, EducationInfo, ProfileInfo } from ".";

const PersonalInfo: React.FC = () => {
  return (
    <div className="bg-[#003147] w-[30%] p-12">
      <ProfileInfo />
      <ContactInfo />
      <EducationInfo />
    </div>
  );
};

export { PersonalInfo };
