import React from "react";
import { IEducation } from "../../types/";

const EducationalInfoItem: React.FC<IEducation> = ({
  profession,
  startDate,
  university,
  endDate,
}) => {
  return (
    <li className="mb-4">
      <h5 className="text-[#03a9f4] font-medium text-sm">
        {startDate} - {endDate ? endDate : "Davam edir"}
      </h5>
      <h4 className="text-white font-medium italic">{university}</h4>
      {profession && (
        <h4 className="text-white font-extralight italic">{profession}</h4>
      )}
    </li>
  );
};

export { EducationalInfoItem };
