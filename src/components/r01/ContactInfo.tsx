import React from "react";
import { FaEnvelope, FaPhone, FaHouseChimney } from "react-icons/fa6";
import useDataFiller from "../../hooks/useDataFiller";
// import { useAppSelector } from "../../store/hooks";

const ContactInfo: React.FC = () => {
  // const placeholderData = useAppSelector((state) => {
  //   if (state.form.onDemo) {
  //     return state.form.placeholderData.personalInfo.contactInfo;
  //   } else {
  //     return (
  //       state.form.userData?.personalInfo.contactInfo ||
  //       state.form.placeholderData.personalInfo.contactInfo
  //     );
  //   }
  // });

  const data = useDataFiller((data) => data.personalInfo.contactInfo);

  return (
    <div className="pt-12">
      <h3 className="text-white uppercase font-semibold tracking-[0.1rem] mb-8 text-[1.872rem]">
        Əlaqə məlumatları
      </h3>
      <ul>
        <li className="flex items-center mx-0 my-4 h-[2.7rem]">
          <span className="inline-block text-[1.8rem] w-[2.2rem] text-[#03a9f4]">
            <FaEnvelope />
          </span>
          <span className="text-white text-[1.2rem] font-light pl-2">
            {data.email}
          </span>
        </li>
        <li className="flex items-center mx-0 my-4 h-[2.7rem]">
          <span className="inline-block text-[1.8rem] w-[2.2rem] text-[#03a9f4]">
            <FaPhone />
          </span>
          <span className="text-white text-[1.2rem] font-light pl-2">
            {data.phone}
          </span>
        </li>
        <li className="flex items-center mx-0 my-4 h-[2.7rem]">
          <span className="inline-block text-[1.8rem] w-[2.2rem] text-[#03a9f4]">
            <FaHouseChimney />
          </span>
          <span className="text-white text-[1.2rem] font-light pl-2">
            {data.address}
          </span>
        </li>
      </ul>
    </div>
  );
};

export { ContactInfo };
