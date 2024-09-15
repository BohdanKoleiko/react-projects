// import just one function for our needs
import { configureStore } from "https://cdn.jsdelivr.net/npm/@reduxjs/toolkit@2.2.7/+esm";
import reducer from "./reducer.js";

export default configureStore({
   reducer,
});
