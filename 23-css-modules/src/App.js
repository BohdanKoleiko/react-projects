import Info from "./components/Info";
import "./App.css";

function App() {
   return (
      <div className="App">
         <Info />
         <hr />
         <div className="info">
            <h1>App component heading</h1>
            <h2>Heading in the App component</h2>
            <button className="my-button">App component button</button>
         </div>
      </div>
   );
}

export default App;
