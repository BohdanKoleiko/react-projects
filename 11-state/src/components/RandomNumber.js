import { useState } from "react";

const generateRandomNum = function () {
   return Math.floor(Math.random() * 100);
};

const RandomNumber = function () {
   const [randomNum, setRandomNum] = useState(generateRandomNum());

   const changeRandomNum = () => {
      setRandomNum(generateRandomNum());
   };

   return (
      <div>
         <h1>{randomNum}</h1>
         <button onClick={changeRandomNum}>Generate new random number</button>
      </div>
   );
};

export default RandomNumber;
