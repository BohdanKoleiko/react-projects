//const App = () => {
//   let [buttonText, setButtonText] = React.useState("Hello from React");

//   const frasesStore = [
//      "Hello from React",
//      "My name is Bohdan",
//      "I'm from Ukraine",
//      "I'm in Poland now",
//   ];

//   const onBtnClick = () => {
//      let getRandomNumberOfFrasesInArr = Math.floor(
//         Math.random() * frasesStore.length,
//      );
//      setButtonText(frasesStore[getRandomNumberOfFrasesInArr]);
//   };

//   return (
//      <div className="app">
//         <button onClick={onBtnClick}>Click to change the headin</button>
//         <h1>{buttonText}</h1>
//      </div>
//   );
//};

const App = ({ initialButtonText, initialClassesList }) => {
   const [buttonText, setButtonText] = React.useState(initialButtonText);
   const [classesList, setClassesList] = React.useState(initialClassesList);

   const onBtnClick = () => {
      setButtonText("Hello from React");
      setClassesList("green-btn");
   };

   return (
      <div className="app">
         <button className={classesList} onClick={onBtnClick}>
            {buttonText}
         </button>
      </div>
   );
};

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);
root.render(<App initialButtonText="Click on me" initialClassesList="" />);
