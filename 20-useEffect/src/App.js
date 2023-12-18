import { useState, useEffect } from "react";
import "./App.css";

function App() {
   const [todo, setTodo] = useState(null);

   useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/todos")
         .then((response) => response.json())
         .then((json) => setTodo(json));
   }, []);

   const parsTodo = function (todos) {
      const tasks = [];

      for (let i = 0; i < todos.length; i++) {
         if (i < 10) {
            tasks.push(todos[i]);
         }
      }

      return tasks;
   };

   //console.log("App rendered");
   //console.log(todo);

   return (
      <div className="App">
         {todo &&
            parsTodo(todo).map((task) => {
               return <h1 key={task.id}>{task.title}</h1>;
            })}
      </div>
   );
}

export default App;
