import React from "react";
import { ITodo } from "../Interfaces";

interface Props {
  todo: ITodo;
  completeTodo(todoNameToDelete: string): void;
}

const TodoTask = ({ todo, completeTodo }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span>{todo.todoName}</span>
        <span>{todo.deadLine}</span>
      </div>
      <button
        onClick={() => {
          completeTodo(todo.todoName);
        }}
      >
        DELETE
      </button>
    </div>
  );
};

export default TodoTask;
