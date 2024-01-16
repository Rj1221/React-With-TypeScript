import { useRef, FC, FormEvent, useContext } from "react";
import classes from "./NewTodo.module.css";
import TodosContext from "../store/todos-context";
const NewTodo: FC = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const todosCtx = useContext(TodosContext);
  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    const enteredText = todoTextInputRef.current!.value;
    if (enteredText.trim().length === 0) {
      return;
    }
    todosCtx.addTodo(enteredText);
    todoTextInputRef.current!.value = ""; // clear the input
  };
  return (
    <>
      <form onSubmit={submitHandler} className={classes.form}>
        <div>
          <label htmlFor="todo-text">Todo Text</label>
          <input type="text" id="todo-text" ref={todoTextInputRef} />
        </div>
        <button type="submit">Add Todo</button>
      </form>
    </>
  );
};
export default NewTodo;
