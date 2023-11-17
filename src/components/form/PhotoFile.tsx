import React, { useEffect, useState } from "react";
import { FieldHookConfig, useField } from "formik";
import { PiUserCircleThin } from "react-icons/pi";
import { IconContext } from "react-icons";

type IInput = {
  label?: string;
};
{
}
const PhotoFile: React.FC<IInput & FieldHookConfig<any>> = ({
  label,
  ...props
}) => {
  const [field, meta, helpers] = useField(props);
  // console.log({ field, meta, helpers });

  const [file, setFile] = useState<string | null>(null);

  useEffect(() => {
    helpers.setValue(file);
  }, [file]);

  const handleSetFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    const eventFile = e.target.files && e.target.files[0];

    if (eventFile && eventFile.type.startsWith("image/")) {
      reader.readAsDataURL(eventFile);

      reader.onload = (event) => {
        setFile(event.target?.result as string);
      };
    } else {
      setFile(null);
      helpers.setError("Yslniz Sekil qebul edilir");
    }
  };

  return (
    <>
      <div className="overflow-hidden relative max-w-[12rem] max-h-48 w-48 h-48 bg-white rounded-[50%]">
        <input
          onChange={(e) => handleSetFile(e)}
          className="pl-80 opacity-0 cursor-pointer absolute top-0 left-0 w-full h-full z-20"
          type="file"
          name=""
          id=""
        />
        {file ? (
          <img
            className="absolute object-cover object-center pointer-events-none top-0 left-0 w-full h-full border"
            src={file}
            alt="Profile Photo"
          />
        ) : (
          <IconContext.Provider
            value={{
              className:
                "absolute object-cover object-center pointer-events-none top-0 left-0 w-full h-full",
            }}
          >
            <PiUserCircleThin />
          </IconContext.Provider>
        )}
      </div>
    </>
  );
};

export { PhotoFile };
