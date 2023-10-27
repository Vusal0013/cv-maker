import {
  PersonalInformation,
  ProfessionalInformation,
} from "../../../components/r01/";

const R01 = () => {
  return (
    <div className="bg-[lightblue] flex flex-col justify-center items-center min-h-screen w-full">
      <ProfessionalInformation />
      <PersonalInformation />
    </div>
  );
};

export { R01 };
