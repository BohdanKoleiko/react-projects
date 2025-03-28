import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   msg: "",
   type: "",
};

const errorSlice = createSlice({
   name: "error",
   initialState,
   reducers: {
      setError: (state, action) => {
         return { ...state, ...action.payload };
      },
      clearError: () => {
         return initialState;
      },
   },
});

export const { setError, clearError } = errorSlice.actions;

export const selectErrorMsg = (state) => state.error;

export default errorSlice.reducer;
