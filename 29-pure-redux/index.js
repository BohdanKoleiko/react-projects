import store from "./redux/store.js";
import { addCurrentTime, cleanTimes } from "./redux/actionCreators.js";

const btn = document.getElementById("addTime");
btn.addEventListener("click", () => {
   store.dispatch(addCurrentTime());
});

const timeList = document.getElementById("timeList");

store.subscribe(() => {
   // First allowed way to clean up children elements
   //timeList.innerHTML = "";

   // And second recommended way (it can be a different loop, 'while' loop like example)
   while (timeList.firstChild) {
      timeList.removeChild(timeList.firstChild);
   }

   const times = store.getState();
   times.forEach((time) => {
      let li = document.createElement("li");
      li.innerText = time;
      timeList.appendChild(li);
   });
});

const removeTimes = document.getElementById("cleanTimesBtn");
removeTimes.addEventListener("click", () => {
   store.dispatch(cleanTimes());
});

//const unsubscribe = store.subscribe(() =>
//   console.log(`Redux store just changed! ${store.getState()}`),
//);

//store.dispatch({
//   type: "ADD_CURRENT_TIME",
//   payload: "11:30:00",
//});

//unsubscribe();

//store.dispatch({
//   type: "ADD_CURRENT_TIME",
//   payload: "12:30:00",
//});

//store.dispatch({
//   type: "CLEAR_ALL_TIMES",
//});
