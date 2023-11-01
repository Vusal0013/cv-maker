import React from "react";
import useDataFiller from "../../hooks/useDataFiller";
import { AboutItem } from ".";

const About: React.FC = () => {
  const { about } = useDataFiller((data) => data.professionalInfo);
  return (
    <div className="mb-12">
      <h2 className="text-[#003147] text-2xl font-bold uppercase tracking-wider mb-7">
        HAQQINDA
      </h2>
      {Array.isArray(about) ? (
        about.map((p) => (
          <AboutItem key={p.slice(-15, -3)} aboutParagraph={p} />
        ))
      ) : (
        <AboutItem aboutParagraph={about} />
      )}
    </div>
  );
};

export { About };
