import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";

function App() {
   const [countNum, setCountNum] = useState(0);

   const incrementCountNum = () => {
      setCountNum(countNum + 1);
   };

   return (
      <div className="App">
         <Counter countNum={countNum} />
         <Button onClick={incrementCountNum} />
         <Button onClick={incrementCountNum} />
         <Button onClick={incrementCountNum} />
         <Button onClick={incrementCountNum} />
      </div>
   );
}

export default App;
