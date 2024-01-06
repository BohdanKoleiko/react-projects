import { useState } from "react";
import styles from "./TodoForm.module.css";
import Button from "../UI/Button";

const TodoForm = function ({ setTodos }) {
   const [text, setText] = useState("");

   const hundlerFormSubmit = function (event) {
      event.preventDefault();

      if (text) {
         setTodos(text);
      }

      setText("");
   };

   return (
      <>
         <form className={styles.form} onSubmit={hundlerFormSubmit}>
            <input
               type="text"
               value={text}
               name="todo"
               placeholder="Enter new todo"
               className={styles.input}
               onChange={(e) => setText(e.target.value)}
            />
            <Button type="submit" className={styles.button} title={"Submit"}>
               Submit
            </Button>
         </form>
      </>
   );
};

export default TodoForm;
