import React, { useEffect, useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./react-datepicker.css";

import { ErrorMessage, FieldHookConfig, useField } from "formik";
import { IMonthName } from "../../types";
import { InputAnimation, InputError } from ".";

const monthsName: IMonthName[] = [
  "Yanvar",
  "Fevral",
  "Mart",
  "Aprel",
  "May",
  "Iyun",
  "Iyul",
  "Avqust",
  "Sentyabr",
  "Oktyabr",
  "Noyabr",
  "Dekabr",
];

const monthName: IMonthName[] = [
  "Yanvar",
  "Fevral",
  "Mart",
  "Aprel",
  "May",
  "Iyun",
  "Iyul",
  "Avqust",
  "Sentyabr",
  "Oktyabr",
  "Noyabr",
  "Dekabr",
];

const BirthDate: React.FC<{ placeholder?: string } & FieldHookConfig<any>> = ({
  ...props
}) => {
  const [field, meta, helpers] = useField(props);

  const stringToDate = (str: string | null) => {
    if (str) {
      const [day, month, year] = str && str.split(" ");

      const monthNumber = monthsName.indexOf(month as IMonthName) + 1;

      return new Date(`${monthNumber}.${day}.${year}`);
    } else return null;
  };

  const dateToString = (date: Date | null) => {
    if (date) {
      const [day, monthNumber, year] = date.toLocaleDateString("ru").split(".");

      const stringDate = `${day} ${monthName[Number(monthNumber) - 1]} ${year}`;

      return stringDate;
    } else return null;
  };

  const [date, setDate] = useState<Date | null>(stringToDate(field.value));

  const [focus, setFocus] = useState<boolean>(false);

  useEffect(() => {
    if (date) helpers.setValue(dateToString(date) ?? "");
  }, [date]);
  return (
    <div className="relative">
      <div className="relative">
        <DatePicker
          onFocus={() => setFocus((prev) => !prev)}
          onBlur={() => {
            setFocus((prev) => !prev),
              !meta.touched && helpers.setTouched(true);
          }}
          onChange={(date) => setDate(date)}
          dateFormat={"dd.MM.yyyy"}
          dropdownMode="scroll"
          showMonthDropdown
          useShortMonthInDropdown
          showYearDropdown
          yearDropdownItemNumber={100}
          scrollableYearDropdown
          className="w-full pr-6 py-1 px-2 bg-gray-50 text-[#2e2e2e] border-2 outline-none border-[#cdcdcd] text-center"
          wrapperClassName="w-full"
          placeholderText="Doğum tarixi"
          selected={date}
          maxDate={new Date()}
          calendarStartDay={1}
        />
        <InputAnimation focus={focus} meta={meta} />
      </div>
      <ErrorMessage
        name={field.name}
        children={(m) => <InputError children={m} />}
      />
    </div>
  );
};

export { BirthDate };
