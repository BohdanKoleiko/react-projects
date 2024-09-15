const initialState = [];

const reducer = function (state, action) {
   switch (action.type) {
      case "ADD_NAME":
         return [...state, action.payload];
      case "DELETE_NAME":
         return state.filter((personName) => personName !== action.payload);
      case "CHANGE_NAME":
         return state.map((personName) =>
            personName === action.payload.oldName ? action.payload.newName : personName,
         );
      case "CLEANING_NAMES":
         return [];
      default:
         return state;
   }
};

let newState = reducer(initialState, { type: "ADD_NAME", payload: "Bohdan" });
console.log(newState);

newState = reducer(newState, { type: "ADD_NAME", payload: "Alice" });
console.log(newState);

newState = reducer(newState, { type: "DELETE_NAME", payload: "Alice" });
console.log(newState);

newState = reducer(newState, {
   type: "CHANGE_NAME",
   payload: { oldName: "Bohdan", newName: "Elizabeth" },
});
console.log(newState);

newState = reducer(newState, { type: "CLEANING_NAMES" });
console.log(newState);

newState = reducer(initialState, { type: "ADD_NAME", payload: "Bohdan" });
console.log(newState);

newState = reducer(newState, { type: "ADD_NAME", payload: "Alice" });
console.log(newState);
