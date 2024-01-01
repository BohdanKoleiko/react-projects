import { RiTodoFill } from "react-icons/ri";
import styles from "./Todo.module.css";

const Todo = function ({ text, deleteTodo, index }) {
   return (
      <>
         <li className={styles.listItem} onDoubleClick={() => deleteTodo(index)}>
            <figure>
               <RiTodoFill />
            </figure>
            <span>{text}</span>
         </li>
      </>
   );
};

export default Todo;
