import React from "react";
import useDataFiller from "../../hooks/useDataFiller";

const ProfileInfo: React.FC = () => {
  const { profileInfo } = useDataFiller((data) => data.personalInfo);

  return (
    <div className="flex flex-col items-center pb-5 border-b-[rgba(255,255,255,0.2)] border-b border-solid">
      <div className="relative min-w-[12rem] min-h-[12rem] max-w-[12rem] max-h-48 overflow-hidden rounded-[50%]">
        <img
          src={profileInfo.profilePhoto?.src}
          alt="Profile photo"
          className="absolute w-full h-full object-cover left-0 top-0;"
        />
      </div>
      <h1 className="text-white text-2xl uppercase text-center font-semibold mt-5">
        {profileInfo.firstName} {profileInfo.lastName}
      </h1>
      {profileInfo.birthDate.isRequired && (
        <small className="text-[#ffffffaa]">{profileInfo.birthDate.date}</small>
      )}
      <h2 className="text-xl font-light text-white uppercase text-center mt-5">
        {profileInfo.profession}
      </h2>
    </div>
  );
};

export { ProfileInfo };
