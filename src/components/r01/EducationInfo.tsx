import React from "react";
import { EducationalInfoItem } from ".";
import useDataFiller from "../../hooks/useDataFiller";

const EducationInfo: React.FC = () => {
  // const placeholderData = useAppSelector((state) => {
  //   if (state.form.onDemo) {
  //     return state.form.placeholderData.personalInfo.educationHistory;
  //   } else {
  //     return (
  //       state.form.userData?.personalInfo.educationHistory ??
  //       state.form.placeholderData.personalInfo.educationHistory
  //     );
  //   }
  // });
  const data = useDataFiller((data) => data.personalInfo.educationHistory);
  return (
    <div className="pt-12">
      <h3 className="text-white uppercase font-semibold tracking-[0.1rem] mb-8 text-[1.872rem]">
        Təhsil
      </h3>
      <ul>
        {Array.isArray(data) ? (
          data.map((item) => (
            <EducationalInfoItem
              startDate={item.startDate}
              endDate={item.endDate}
              profession={item.profession}
              university={item.university}
              key={item.startDate + item.endDate}
            />
          ))
        ) : (
          <EducationalInfoItem
            startDate={data.startDate}
            endDate={data.endDate}
            profession={data.profession}
            university={data.university}
          />
        )}
      </ul>
    </div>
  );
};

export { EducationInfo };
