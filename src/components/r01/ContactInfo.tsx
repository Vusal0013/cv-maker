import React from "react";
import { FaEnvelope, FaPhone, FaHouseChimney } from "react-icons/fa6";
import useDataFiller from "../../hooks/useDataFiller";

const ContactInfo: React.FC = () => {
  const { contactInfo } = useDataFiller((data) => data.personalInfo);

  return (
    <div className="pt-7">
      <h3 className="text-white uppercase font-semibold tracking-wider mb-4 text-lg">
        Əlaqə məlumatları
      </h3>
      <ul>
        <li className="flex items-center mx-0 my-2 h-7">
          <span className="inline-block text-base w-4 text-[#03a9f4]">
            <FaEnvelope />
          </span>
          <span className="text-white text-sm font-light pl-2">
            {contactInfo.email}
          </span>
        </li>
        <li className="flex items-center mx-0 my-2 h-7">
          <span className="inline-block text-base w-4 text-[#03a9f4]">
            <FaPhone />
          </span>
          <span className="text-white text-sm font-light pl-2">
            {contactInfo.phone}
          </span>
        </li>
        {contactInfo.address && (
          <li className="flex items-center mx-0 my-2 h-7">
            <span className="inline-block text-base w-4 text-[#03a9f4]">
              <FaHouseChimney />
            </span>
            <span className="text-white text-sm font-light pl-2">
              {contactInfo.address}
            </span>
          </li>
        )}
      </ul>
    </div>
  );
};

export { ContactInfo };
