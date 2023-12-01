export interface IBirthDateState {
  daysInMonth: string[];
  day: string;
  month: IMonthName;
  year: string;
}

export interface IOpenState {
  day: boolean;
  month: boolean;
  year: boolean;
}

export type IBDayInput = "year" | "day" | "month";

export type IMonthName =
  | "Yanvar"
  | "Fevral"
  | "Mart"
  | "Aprel"
  | "May"
  | "Iyun"
  | "Iyul"
  | "Avqust"
  | "Sentyabr"
  | "Oktyabr"
  | "Noyabr"
  | "Dekabr"
  | "Ay";

export type IBirthDateInputRef = HTMLDivElement;

export interface IBirthDateInput {
  dataType: IBDayInput;
  open: IOpenState;
  iterableArray: IMonthName[] | string[];
  handleSetOpen: (thisOpen?: IBDayInput) => void;
  date: IBirthDateState;
  disabled?: boolean;
  handleClickSetDate: (type: IBDayInput, value: string) => void;
}
