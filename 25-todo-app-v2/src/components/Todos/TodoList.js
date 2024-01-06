import styles from "./TodoList.module.css";
import Todo from "./Todo";

const TodoList = function ({ todos, deleteTodo, completeTodo }) {
   return (
      <ul className={styles.taskList}>
         {!todos.length ? (
            <li className={styles.emptyList}>Todo list is empty</li>
         ) : (
            todos.map((todo) => (
               <Todo
                  todo={todo}
                  deleteTodo={deleteTodo}
                  completeTodo={completeTodo}
                  key={todo.id}
               />
            ))
         )}
      </ul>
   );
};

export default TodoList;
