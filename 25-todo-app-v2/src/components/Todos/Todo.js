import { RiTodoFill, RiDeleteBin2Line } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import styles from "./Todo.module.css";

const Todo = function ({ todo, deleteTodo, completeTodo }) {
   return (
      <>
         <li className={`${styles.todo} ${todo.isCompleted ? styles.completedTodo : ""}`}>
            <RiTodoFill className={styles.todoImg} />
            <span>{todo.text}</span>
            <RiDeleteBin2Line className={styles.removeTodo} onClick={() => deleteTodo(todo.id)} />
            <FaCheck className={styles.checkTodo} onClick={() => completeTodo(todo.id)} />
         </li>
      </>
   );
};

export default Todo;
