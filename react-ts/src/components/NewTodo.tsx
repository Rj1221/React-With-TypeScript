import { useRef, FC, FormEvent } from "react";
const NewTodo: FC = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    const enteredText = todoTextInputRef.current!.value;
    console.log(enteredText);
  };
  return (
    <>
      <form onSubmit={submitHandler}>
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
