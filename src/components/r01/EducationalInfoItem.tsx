import React from "react";
import { IEducation } from "../../form/formType";

const EducationalInfoItem: React.FC<IEducation> = (edu) => {
  return (
    <li className="mb-6">
      <h5 className="text-[#03a9f4] font-medium text-[1.328rem]">
        {edu.startDate} - {edu.endDate}
      </h5>
      <h4 className="text-white font-medium italic">{edu.university}</h4>
      <h4 className="text-white font-extralight italic">{edu.profession}</h4>
    </li>
  );
};

export { EducationalInfoItem };
