import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import TodosActions from "./components/Todos/TodosActions";

function App() {
   const [todos, setTodos] = useState([]);

   const setTodosHandler = function (text) {
      const newTodo = { id: uuidv4(), text, isCompleted: false };

      setTodos([...todos, newTodo]);
   };

   const removeTodoHandler = (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
   };

   const completeTodoHandler = (id) => {
      setTodos(
         todos.map((todo) =>
            todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : { ...todo },
         ),
      );
   };

   const resetTodosHandler = function () {
      setTodos([]);
   };

   const removeCompletedTodosHandler = function () {
      setTodos(todos.filter((todo) => !todo.isCompleted));
   };

   const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;

   return (
      <div className="app">
         <h1>Todo App</h1>
         <TodoForm setTodos={setTodosHandler} />

         {!!todos.length && (
            <div className="appActionBtn">
               <TodosActions
                  resetTodos={resetTodosHandler}
                  removeCompletedTodos={removeCompletedTodosHandler}
                  completeTodoExist={!completedTodosCount}
               />
            </div>
         )}

         <TodoList
            todos={todos}
            deleteTodo={removeTodoHandler}
            completeTodo={completeTodoHandler}
         />

         {!!completedTodosCount && (
            <p className="appCompletedTasks">
               You have completed {completedTodosCount} {completedTodosCount > 1 ? "todos" : "todo"}
            </p>
         )}
      </div>
   );
}

export default App;
