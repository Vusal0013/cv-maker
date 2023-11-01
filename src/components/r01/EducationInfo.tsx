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
  const { educationHistory } = useDataFiller((data) => data.personalInfo);
  return (
    <div className="pt-7">
      <h3 className="text-white uppercase font-semibold tracking-wider mb-4 text-lg">
        TƏHSİL
      </h3>
      <ul>
        {Array.isArray(educationHistory) ? (
          educationHistory.map((item) => (
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
            startDate={educationHistory.startDate}
            endDate={educationHistory.endDate}
            profession={educationHistory.profession}
            university={educationHistory.university}
          />
        )}
      </ul>
    </div>
  );
};

export { EducationInfo };
