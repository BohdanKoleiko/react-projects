import "./App.css";
import MyComponent from "./components/MyComponent";
import OtherComponent from "./components/OtherComponent";

const App = function () {
   return (
      <div className="App">
         <MyComponent />
         <OtherComponent />

         <MyComponent />
         <OtherComponent />

         <MyComponent />
         <OtherComponent />
      </div>
   );
};

export default App;
