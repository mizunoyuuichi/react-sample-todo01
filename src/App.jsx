import React, { useState } from "react";
import "./styles.css";

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
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のリスト</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のリスト</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickIncomplete(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
