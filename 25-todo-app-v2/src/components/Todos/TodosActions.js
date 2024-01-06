import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";
import styles from "./TodosActions.module.css";
import Button from "../UI/Button";

const TodosActions = function ({ resetTodos, removeCompletedTodos, completeTodoExist }) {
   return (
      <>
         <Button title="Reset Todos" onClick={resetTodos}>
            <RiRefreshLine />
         </Button>
         <Button
            title="Clear Completed Todos"
            onClick={removeCompletedTodos}
            disabled={completeTodoExist}
         >
            <RiDeleteBin2Line />
         </Button>
      </>
   );
};

export default TodosActions;
