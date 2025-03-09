import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   title: "",
   author: "",
   onlyFavorite: false,
};

const filterSlice = createSlice({
   name: "filter",
   reducers: {
      setTitleFilter: (state, action) => {
         // I can mutate state thanks to Immer library
         state.title = action.payload;

         // But if I want I can use oldfeshen style
         // return {...state, title: action.payload}
      },
      setAuthorFilter: (state, action) => {
         state.author = action.payload;
      },
      setOnlyFavoriteFilter: (state) => {
         state.onlyFavorite = !state.onlyFavorite;
      },
      resetFilters: () => {
         return initialState;
      },
   },
   initialState,
});

export const { setTitleFilter, setAuthorFilter, setOnlyFavoriteFilter, resetFilters } =
   filterSlice.actions;

export const selectTitleFilter = (state) => state.filter.title;
export const selectAuthorNameFilter = (state) => state.filter.author;
export const selectOnlyFavoriteFilter = (state) => state.filter.onlyFavorite;

export default filterSlice.reducer;
