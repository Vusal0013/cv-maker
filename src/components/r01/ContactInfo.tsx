import React from "react";
import { FaEnvelope, FaPhone, FaHouseChimney } from "react-icons/fa6";

const ContactInfo: React.FC = () => {
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
            Vusal.feyruz@gmail.com
          </span>
        </li>
        <li className="flex items-center mx-0 my-4 h-[2.7rem]">
          <span className="inline-block text-[1.8rem] w-[2.2rem] text-[#03a9f4]">
            <FaPhone />
          </span>
          <span className="text-white text-[1.2rem] font-light pl-2">
            +994515731906
          </span>
        </li>
        <li className="flex items-center mx-0 my-4 h-[2.7rem]">
          <span className="inline-block text-[1.8rem] w-[2.2rem] text-[#03a9f4]">
            <FaHouseChimney />
          </span>
          <span className="text-white text-[1.2rem] font-light pl-2">
            Bakı ş. Suraxanı r. Bül-Bülə qəsəbəsi
          </span>
        </li>
      </ul>
    </div>
  );
};

export { ContactInfo };
