import styles from "./TodoList.module.css";
import Todo from "./Todo";

const TodoList = function ({ todos, deleteTodo }) {
   return (
      <ul className={styles.taskList}>
         {!todos.length ? (
            <li className={styles.emptyList}>Todo list is empty</li>
         ) : (
            todos.map((todo, index) => (
               <Todo text={todo} index={index} deleteTodo={deleteTodo} key={index} />
            ))
         )}
      </ul>
   );
};

export default TodoList;
