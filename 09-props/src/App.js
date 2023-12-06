import "./App.css";
import PetInfo from "./components/PetInfo";

function App() {
   return (
      <div className="App">
         <PetInfo animal="dog" age="3" />
         <PetInfo animal="goose" age="1" />
      </div>
   );
}

export default App;
