import React from "react";

const EducationInfo: React.FC = () => {
  return (
    <div className="pt-12">
      <h3 className="text-white uppercase font-semibold tracking-[0.1rem] mb-8 text-[1.872rem]">
        Təhsil
      </h3>
      <ul>
        <li className="mb-6">
          <h5 className="text-[#03a9f4] font-medium text-[1.328rem]">
            2022 - 2023
          </h5>
          <h4 className="text-white font-medium italic">
            IT Academy (Algoritmica)
          </h4>
          <h4 className="text-white font-extralight italic">Web Developer</h4>
        </li>
      </ul>
    </div>
  );
};

export { EducationInfo };
