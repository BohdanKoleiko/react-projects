import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";

const txtArray = ["Click", "Click on me!", "Click another one", "Press me"];

function App() {
   const [countNum, setCountNum] = useState(0);

   // краще передати incrementCountNum() функцію кнопці, ніж передавати setCountNum() разом з countNum, тому що компоненту Button не потрібно знати яке число на разі є, ця інформація для Button буде ізбиточна.
   const incrementCountNum = () => {
      setCountNum(countNum + 1);
   };

   return (
      <div className="App">
         <Counter countNum={countNum} />
         {txtArray.map((txt, i) => (
            <Button onClick={incrementCountNum} btnText={txt} key={i} />
         ))}
      </div>
   );
}

export default App;
