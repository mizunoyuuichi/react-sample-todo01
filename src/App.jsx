import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  let [todoText, setTodoText] = useState("");
  let [incompleteTodos, setIncompleteTodos] = useState(["a", "b"]);
  let [completeTodos, setCompleteTodos] = useState(["ac", "bc"]);

  let onChangeTodoText = (event) => setTodoText(event.target.value);

  let onClickAdd = () => {
    if (todoText === "") return;
    setIncompleteTodos([...incompleteTodos, todoText]);
    setTodoText("");
  };

  let onClickDelete = (index) => {
    setIncompleteTodos(
      [...incompleteTodos].filter((n) => n !== incompleteTodos[index])
    );
  };

  let onClickComplete = (index) => {
    setCompleteTodos([...completeTodos, incompleteTodos[index]]);
    setIncompleteTodos(
      [...incompleteTodos].filter((n) => n !== incompleteTodos[index])
    );
  };

  let onClickIncomplete = (index) => {
    setIncompleteTodos([...incompleteTodos, completeTodos[index]]);
    setCompleteTodos(
      [...completeTodos].filter((n) => n !== completeTodos[index])
    );
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos
        completeTodos={completeTodos}
        onClickIncomplete={onClickIncomplete}
      />
    </>
  );
};
