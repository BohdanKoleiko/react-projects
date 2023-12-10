import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";

function App() {
   const [countNum, setCountNum] = useState(0);
   const buttonStyle = { backgroundColor: "lightgreen" };

   // краще передати incrementCountNum() функцію кнопці, ніж передавати setCountNum() разом з countNum, тому що компоненту Button не потрібно знати яке число на разі є, ця інформація для Button буде ізбиточна.
   const incrementCountNum = () => {
      setCountNum(countNum + 1);
   };
   const resetCount = function () {
      setCountNum(0);
   };

   return (
      <div className="App">
         <Counter countNum={countNum} />
         <Button onClick={incrementCountNum} />
         <Button onClick={incrementCountNum} />
         <Button onClick={incrementCountNum} />
         <Button onClick={incrementCountNum} />
         {!!countNum && (
            <div>
               <button style={buttonStyle} onClick={resetCount}>
                  Reset
               </button>
            </div>
         )}
      </div>
   );
}

export default App;
