let data = `import React, { useEffect, useRef, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { BirthDateInput } from "./";

import {
  IBDayInput,
  IBirthDateInputRef,
  IBirthDateState,
  IMonthName,
  IOpenState,
} from "../../types";
import { FieldHookConfig } from "formik";

const getLast100Years = (date: Dayjs): string[] => {
  const last_100_Year: string[] = [];
  for (let year = date.year() - 100; year <= date.year(); year++) {
    last_100_Year.unshift(String(year));
  }
  return last_100_Year;
};

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

const getDayLength = (length: string): string[] => {
  return Array.from({ length: Number(length) }, (_, index) => String(++index));
};

const BirthDate: React.FC = ({children}) => {
  const [date, setDate] = useState<IBirthDateState>({
    daysInMonth: getDayLength(String(dayjs().daysInMonth())),
    day: dayjs().date().toString(),
    month: monthName[dayjs().month()],
    year: dayjs().year().toString(),
  });

  const [open, setOpen] = useState<IOpenState>({
    day: false,
    month: false,
    year: false,
  });

  const dayRef = useRef<IBirthDateInputRef>(null);
  const monthRef = useRef<IBirthDateInputRef>(null);
  const yearRef = useRef<IBirthDateInputRef>(null);

  const handleSetOpen = (thisOpen?: IBDayInput) => {
    switch (thisOpen) {
      case "day":
        return { day: true, month: false, year: false };
      case "month":
        return { day: false, month: true, year: false };
      case "year":
        return { day: false, month: false, year: true };
      default:
        return { day: false, month: false, year: false };
    }
  };

  const handleClickSetDate = (type: IBDayInput, value: string) => {
    const handleSetDayInMount = (
      month: IMonthName[],
      prevState: IBirthDateState
    ) => {
      switch (type) {
        case "month":
          return String(
            dayjs(
              prevState.year + String(month.indexOf(value as IMonthName) + 1)
            ).daysInMonth()
          );
        case "year":
          return String(
            dayjs(
              value + String(month.indexOf(prevState.month) + 1)
            ).daysInMonth()
          );
        default:
          return prevState.daysInMonth[prevState.daysInMonth.length - 1];
      }
    };

    setDate((prev) => ({
      ...prev,
      daysInMonth: getDayLength(handleSetDayInMount(monthName, prev)),
      day:
        prev.day <=
        String(getDayLength(handleSetDayInMount(monthName, prev)).length)
          ? prev.day
          : String(getDayLength(handleSetDayInMount(monthName, prev)).length),
      [type]: value,
    }));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        (open.day || open.month || open.year) &&
        !(
          dayRef.current?.contains(event.target as HTMLElement) ||
          monthRef.current?.contains(event.target as HTMLElement) ||
          yearRef.current?.contains(event.target as HTMLElement)
        )
      ) {
        setOpen(handleSetOpen());
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="flex gap-2 w-64 justify-between">
      <BirthDateInput
        ref={dayRef}
        date={date}
        setOpen={setOpen}
        handleClickSetDate={handleClickSetDate}
        handleSetOpen={handleSetOpen}
        iterableArray={date.daysInMonth}
        open={open}
        dataType="day"
      />
      <BirthDateInput
        ref={monthRef}
        date={date}
        setOpen={setOpen}
        handleClickSetDate={handleClickSetDate}
        handleSetOpen={handleSetOpen}
        iterableArray={monthName}
        open={open}
        dataType="month"
      />
      <BirthDateInput
        ref={yearRef}
        date={date}
        setOpen={setOpen}
        handleClickSetDate={handleClickSetDate}
        handleSetOpen={handleSetOpen}
        iterableArray={getLast100Years(dayjs())}
        open={open}
        dataType="year"
      />
    </div>
  );
};

export { BirthDate };



`;

const anew = data.replace(/[\s\n]/g, "");

console.log(anew);
