import React from "react";
import { useAppSelector } from "../../store/hooks";

const ProfileInfo: React.FC = () => {
  const placeholderData = useAppSelector(
    (state) => state.form.placeholderData.personalInfo.profileInfo
  );

  return (
    <div className="flex flex-col items-center pb-8 border-b-[rgba(255,255,255,0.2)] border-b border-solid">
      <div className="relative min-w-[20rem] min-h-[20rem] max-w-xs max-h-80 overflow-hidden rounded-[50%]">
        <img
          src={placeholderData.profilePhoto}
          alt="Profile photo"
          className="absolute w-full h-full object-cover left-0 top-0;"
        />
      </div>
      <h1 className="text-white text-[2.2rem] uppercase text-center font-semibold leading-8 mt-8">
        {placeholderData.fullname}
      </h1>
      <h2 className="text-[calc(2.2rem_*_0.8)] font-light text-white uppercase text-center leading-8 mt-8">
        {placeholderData.profession}
      </h2>
    </div>
  );
};

export { ProfileInfo };
