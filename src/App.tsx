import React, { FC, ChangeEvent, useState } from "react";
import "./App.css";
import { ITodo } from "./Interfaces";
import TodoTask from "./components/TodoTask";

const App: FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [deadLine, setDeadLine] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITodo[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "todo") {
      setTodo(e.target.value);
    } else {
      setDeadLine(Number(e.target.value));
    }
  };

  const addTodo = (): void => {
    const newTodo = { todoName: todo, deadLine: deadLine };
    setTodoList([...todoList, newTodo]);
    // console.log(todoList);
    setTodo("");
    setDeadLine(0);
  };

  const completeTodo = (todoNameToDelete: string): void => {
    setTodoList(
      todoList.filter((todo) => {
        return todo.todoName != todoNameToDelete;
      })
    );
  };

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="할일 등록 .."
            name="todo"
            value={todo}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="언제까지 할지 날짜.."
            name="deadLine"
            value={deadLine}
            onChange={handleChange}
          />
        </div>
        <button onClick={addTodo}>ADD</button>
      </div>
      <div className="todoList">
        {todoList.map((todo: ITodo, key: number) => {
          return <TodoTask key={key} todo={todo} completeTodo={completeTodo} />;
        })}
      </div>
    </div>
  );
};

export default App;
