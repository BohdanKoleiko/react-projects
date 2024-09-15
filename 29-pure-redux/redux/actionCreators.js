import getCurrentTime from "../utils/getCurrentTime.js";
import * as actionTypes from "./actionTypes.js";

export function addCurrentTime() {
   return {
      type: actionTypes.ADD_CURRENT_TIME,
      payload: getCurrentTime(),
   };
}

export function cleanTimes() {
   return {
      type: actionTypes.CLEAN_ALL_TIMES,
   };
}
