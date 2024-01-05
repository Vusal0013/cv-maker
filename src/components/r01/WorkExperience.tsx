import React from "react";
import useDataFiller from "../../hooks/useDataFiller";
import { WorkExperinceItem } from ".";

const WorkExperience: React.FC = () => {
  const { workExperience } = useDataFiller((data) => data.professionalInfo);

  const data =
    workExperience.length > 1 ? [...workExperience].reverse() : workExperience;

  return (
    <div className="mb-12">
      <h2 className="text-[#003147] text-2xl font-bold uppercase tracking-wider mb-7">
        İŞ TƏCRÜBƏSİ
      </h2>
      {data.map(
        ({ company, profession, responsibilities, startDate, endDate }) => (
          <WorkExperinceItem
            key={startDate + endDate}
            company={company}
            profession={profession}
            responsibilities={responsibilities}
            startDate={startDate}
            endDate={endDate}
          />
        )
      )}
    </div>
  );
};

export { WorkExperience };
