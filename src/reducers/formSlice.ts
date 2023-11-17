import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFormType } from "../types/formDataType";
import formPlaceholder from "../formData/formPlaceholder";

export interface IFormSliceState {
  onDemo: boolean;
  placeholderData: IFormType;
  userData?: IFormType;
}

const initialState: IFormSliceState = {
  onDemo: false,
  placeholderData: formPlaceholder,
};

const formSlice = createSlice({
  name: "formSlice",
  initialState,
  reducers: {
    setUserData(state, action: PayloadAction<IFormType>) {
      state.userData = { ...state.userData, ...action.payload };
    },
  },
});

export const { actions, reducer } = formSlice;
export default formSlice.reducer;
