import React from "react";
import { IWorkExperience } from "../../types/formDataType";

const WorkExperinceItem: React.FC<IWorkExperience> = ({
  company,
  profession,
  responsibilities,
  startDate,
  endDate,
}) => {
  return (
    <div className="flex flex-row mx-0 my-5">
      <div className="min-w-[10rem] mr-2.5">
        <h5 className="uppercase text-[#848c90] text-[10px] font-semibold">{`${startDate} - ${
          endDate ? endDate : "Hazırda çalışıram"
        }`}</h5>
        <h5 className="uppercase text-[#848c90] text-sm font-semibold">
          {company}
        </h5>
      </div>
      <div>
        {profession && (
          <h4 className="uppercase text-[#2a7da2] text-base font-bold">
            {profession}
          </h4>
        )}
        <p>{responsibilities}</p>
      </div>
    </div>
  );
};

export { WorkExperinceItem };
