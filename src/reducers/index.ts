import { combineReducers } from "@reduxjs/toolkit";
import formSlice from "./formSlice";

const rootReducer = combineReducers({
  form: formSlice,
});

export default rootReducer;
