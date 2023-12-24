// import React, { useEffect, useRef, useState } from "react";
// import dayjs, { Dayjs } from "dayjs";
// import { BirthDateInput } from "./";

// import {
//   IBDayInput,
//   IBirthDateInputRef,
//   IBirthDateState,
//   IFormType,
//   IMonthName,
//   IOpenState,
// } from "../../types";
// import { FieldMetaProps, useFormikContext } from "formik";
// import classNames from "classnames";
// import { BiSolidCheckCircle, BiSolidErrorCircle } from "react-icons/bi";
// import { IBirthDate } from "../../types/formDataType";

// const getLast100Years = (date: Dayjs): string[] => {
//   const last_100_Year: string[] = [];
//   for (let year = date.year() - 100; year <= date.year(); year++) {
//     last_100_Year.unshift(String(year));
//   }
//   return last_100_Year;
// };

// export const monthName: IMonthName[] = [
//   "Yanvar",
//   "Fevral",
//   "Mart",
//   "Aprel",
//   "May",
//   "Iyun",
//   "Iyul",
//   "Avqust",
//   "Sentyabr",
//   "Oktyabr",
//   "Noyabr",
//   "Dekabr",
// ];

// export const getDayLength = (length: string): string[] => {
//   return Array.from({ length: Number(length) }, (_, index) => String(++index));
// };

// const _BirthDate: React.FC<{
//   values?: IBirthDate;
//   getFieldMeta: <Value>(name: string) => FieldMetaProps<Value>;
// }> = ({ values, getFieldMeta }) => {
//   const [date, setDate] = useState<IBirthDateState>({
//     daysInMonth: getDayLength(String(dayjs().daysInMonth())),
//     day: values?.day ? values?.day : "Gün",
//     month: values?.month ? values?.month : "Ay",
//     year: values?.year ? values?.year : "İl",
//   });

//   const formik = useFormikContext<IFormType>();
//   const [open, setOpen] = useState<IOpenState>({
//     day: false,
//     month: false,
//     year: false,
//   });

//   const dayRef = useRef<IBirthDateInputRef>(null);
//   const monthRef = useRef<IBirthDateInputRef>(null);
//   const yearRef = useRef<IBirthDateInputRef>(null);

//   const handleSetOpen = (thisOpen?: IBDayInput) => {
//     setOpen({
//       day: !open.day && thisOpen === "day",
//       month: !open.month && thisOpen === "month",
//       year: !open.year && thisOpen === "year",
//     });
//   };
//   const handleClickSetDate = (type: IBDayInput, value: string) => {
//     const handleSetDayInMount = (
//       month: IMonthName[],
//       prevState: IBirthDateState
//     ) => {
//       const year = prevState.year === "İl" ? dayjs().year() : prevState.year;

//       switch (type) {
//         case "month":
//           return String(
//             dayjs(
//               year + String(month.indexOf(value as IMonthName) + 1)
//             ).daysInMonth()
//           );
//         case "year":
//           return String(
//             dayjs(
//               value + String(month.indexOf(prevState.month) + 1)
//             ).daysInMonth()
//           );
//         default:
//           return prevState.daysInMonth[prevState.daysInMonth.length - 1];
//       }
//     };

//     setDate((prev) => ({
//       ...prev,
//       daysInMonth: getDayLength(handleSetDayInMount(monthName, prev)),
//       day:
//         prev.day <=
//         String(getDayLength(handleSetDayInMount(monthName, prev)).length)
//           ? prev.day
//           : String(getDayLength(handleSetDayInMount(monthName, prev)).length),
//       [type]: value,
//     }));
//   };

//   useEffect(() => {
//     formik.setFieldValue("personalInfo.profileInfo.birthDate.day", date.day);
//     formik.setFieldValue(
//       "personalInfo.profileInfo.birthDate.month",
//       date.month
//     );
//     formik.setFieldValue("personalInfo.profileInfo.birthDate.year", date.year);
//   }, [date]);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         (open.day || open.month || open.year) &&
//         !(
//           dayRef.current?.contains(event.target as HTMLElement) ||
//           monthRef.current?.contains(event.target as HTMLElement) ||
//           yearRef.current?.contains(event.target as HTMLElement)
//         )
//       ) {
//         handleSetOpen();
//       }
//     };

//     document.addEventListener("click", handleClickOutside);
//     return () => {
//       document.removeEventListener("click", handleClickOutside);
//     };
//   }, [open]);

//   return (
//     <div className="w-full flex justify-center iems-center bg-white m-1">
//       <div className="flex gap-2 w-full justify-between relative z-10">
//         <BirthDateInput
//           ref={dayRef}
//           date={date}
//           handleClickSetDate={handleClickSetDate}
//           handleSetOpen={handleSetOpen}
//           iterableArray={date.daysInMonth}
//           open={open}
//           dataType="day"
//         />
//         <BirthDateInput
//           ref={monthRef}
//           date={date}
//           handleClickSetDate={handleClickSetDate}
//           handleSetOpen={handleSetOpen}
//           iterableArray={monthName}
//           open={open}
//           disabled={date.day === "Gün"}
//           dataType="month"
//         />
//         <BirthDateInput
//           ref={yearRef}
//           date={date}
//           handleClickSetDate={handleClickSetDate}
//           handleSetOpen={handleSetOpen}
//           iterableArray={getLast100Years(dayjs())}
//           open={open}
//           disabled={date.month === "Ay"}
//           dataType="year"
//         />

//         <div
//           className={classNames({
//             "h-full w-9 flex justify-center items-center text-lg": true,
//             "text-[#cf4343]":
//               date.day === "Gün" || date.month === "Ay" || date.year === "İl",
//             "text-[#60af68]":
//               date.day !== "Gün" && date.month !== "Ay" && date.year !== "İl",
//           })}
//         >
//           {date.day === "Gün" || date.month === "Ay" || date.year === "İl" ? (
//             <BiSolidErrorCircle />
//           ) : (
//             <BiSolidCheckCircle />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export { _BirthDate };
