import React from "react";

interface ISkillsProficiency {
  proficiency: string;
}

const SkillsProficiency: React.FC<ISkillsProficiency> = ({ proficiency }) => {
  return (
    <div className="relative w-full h-2 bg-[#081921] mt-1">
      <div
        style={{ width: proficiency }}
        className={`absolute h-full bg-[#03a9f4] left-0 top-0`}
      />
    </div>
  );
};

export { SkillsProficiency };
