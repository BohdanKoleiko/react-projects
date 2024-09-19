import * as actionTypes from "./actionTypes.js";

// to correct working of Reducer initial state should be created
const initialState = [];

function reducer(state = initialState, action) {
   switch (action.type) {
      case actionTypes.ADD_CURRENT_TIME:
         return [...state, action.payload];
      case actionTypes.CLEAN_ALL_TIMES:
         return [];
      default:
         return state;
   }
}

export default reducer;
