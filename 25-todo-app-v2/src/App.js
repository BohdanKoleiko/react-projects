import { useState } from "react";
import "./App.css";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";

function App() {
   const [todos, setTodos] = useState([]);

   const setTodosHandler = function (value) {
      setTodos([...todos, value]);
   };

   const removeTodoHandler = (index) => {
      setTodos(todos.filter((_, i) => index !== i));
   };

   return (
      <div className="App">
         <h1>Todo App</h1>
         <TodoForm setTodos={setTodosHandler} />
         <TodoList todos={todos} deleteTodo={removeTodoHandler} />
      </div>
   );
}

export default App;
