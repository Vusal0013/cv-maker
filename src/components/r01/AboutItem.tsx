import React from "react";

interface IAboutItem {
  aboutParagraph: string;
}

const AboutItem: React.FC<IAboutItem> = ({ aboutParagraph }) => {
  return (
    <div className="mb-4 text-[#333333]">
      <p>{aboutParagraph}</p>
    </div>
  );
};

export { AboutItem };
