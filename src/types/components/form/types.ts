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
  | "Dekabr";

export type IBirthDateInputRef = HTMLDivElement;

export interface IBirthDateInput {
  dataType: IBDayInput;
  open: IOpenState;
  setOpen: React.Dispatch<React.SetStateAction<IOpenState>>;
  iterableArray: IMonthName[] | string[];
  handleSetOpen: (thisOpen?: IBDayInput) => {
    day: boolean;
    month: boolean;
    year: boolean;
  };
  date: IBirthDateState;
  handleClickSetDate: (type: IBDayInput, value: string) => void;
}
