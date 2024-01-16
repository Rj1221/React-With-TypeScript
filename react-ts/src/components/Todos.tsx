import React, { FC } from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
const Todos: FC<{ items: Todo[] }> = (props) => {
  return (
    <>
      <ul className={classes.todos}>
        {props.items.map((item) => (
          <TodoItem key={item.id} text={item.title} />
        ))}
      </ul>
    </>
  );
};

export default Todos;
