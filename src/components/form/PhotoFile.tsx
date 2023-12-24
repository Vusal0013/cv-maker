import React, { useEffect, useRef, useState } from "react";
import { ErrorMessage, FieldHookConfig, FormikErrors, useField } from "formik";
import { PiUserCircleThin } from "react-icons/pi";
import { IconContext } from "react-icons";
import { IFormType } from "../../types";
import { FaCircleNotch } from "react-icons/fa6";
import classNames from "classnames";
import { InputError } from ".";

type IInput = {
  label?: string;
  valueFile: File | null | undefined;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void | FormikErrors<IFormType>>;
};
{
}
const PhotoFile: React.FC<IInput & FieldHookConfig<string>> = ({
  label,
  setFieldValue,
  valueFile,
  ...props
}) => {
  const [field, meta, helpers] = useField(props);

  const fileRef = useRef<HTMLInputElement>(null);

  const [file, setFile] = useState<{
    base64: string | null;
    file: File | null | undefined;
    progress: boolean;
  }>({
    base64: field.value,
    file: valueFile,
    progress: false,
  });

  useEffect(() => {
    const dataTransfer = new DataTransfer();
    file.file && dataTransfer.items.add(file.file);

    helpers.setValue(file?.base64 ? file.base64 : "");
    setFieldValue("personalInfo.profileInfo.profilePhoto.file", file?.file);
    if (fileRef.current?.files) fileRef.current.files = dataTransfer.files;
  }, [file]);

  const handleSetFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    const eventFile = e.target.files && e.target.files[0];

    const handleLoadEnd = (e: ProgressEvent<FileReader>) => {
      !meta.touched && helpers.setTouched(true);

      console.log("loadEnd");

      setFile((prev) => ({
        ...prev,
        file: eventFile,
        base64: e.target?.result as string,
        progress: false,
      }));
    };

    const handleLoadstart = () => {
      setFile((prev) => ({ ...prev, progress: true }));
    };

    if (eventFile && eventFile.type.startsWith("image/")) {
      reader.readAsDataURL(eventFile);

      reader.onloadstart = handleLoadstart;

      reader.onloadend = handleLoadEnd;
    } else {
      setFile((prev) => ({
        ...prev,
        base64: field.value,
        file: valueFile,
        progress: false,
      }));
      helpers.setError("Yalniz Sekil qebul edilir");
    }
    reader.removeEventListener("loadend", handleLoadEnd);
    reader.removeEventListener("loadstart", handleLoadstart);
  };

  return (
    <div className="relative">
      <div
        className={classNames({
          "w-full flex justify-center items-center": true,
          "p-1 border-2 rounded-[50%] border-red-800":
            meta.touched && meta.error,
        })}
      >
        <div className="overflow-hidden relative max-w-[12rem] max-h-48 w-48 h-48 bg-white rounded-[50%]">
          <input
            ref={fileRef}
            onChange={(e) => handleSetFile(e)}
            className="opacity-0 cursor-pointer absolute top-0 left-0 w-full h-full z-20"
            type="file"
            name={props.name}
          />
          {file.progress ? (
            <IconContext.Provider
              value={{
                className:
                  "absolute object-cover object-center pointer-events-none top-0 left-0 w-full h-full p-16 animate-spin",
              }}
            >
              <FaCircleNotch />
            </IconContext.Provider>
          ) : file.base64 ? (
            <img
              className="absolute object-cover object-center pointer-events-none top-0 left-0 w-full h-full border"
              alt="Profile Photo"
              src={file.base64}
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
      </div>
      <ErrorMessage
        name={field.name}
        children={(m) => <InputError children={m} />}
      />
    </div>
  );
};

export { PhotoFile };
