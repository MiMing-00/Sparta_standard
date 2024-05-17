import React, { useState } from "react";
import ToDoListForm from "./ToDoListForm";
import ToDoLists from "./ToDoLists";

const ToDoListContain = () => {
  const [toDoLists, setToDoLists] = useState([
    {
      id: 1,
      title: "리액트 조아~",
      content: "리액트 공부 열심히 하기!",
      isDone: false,
    },

    {
      id: 2,
      title: "JS가 더 조아~",
      content: "JS 공부 열심히 하기!",
      isDone: true,
    },
  ]);
  return (
    <div>
      <h1>To Do List</h1>
      <ToDoListForm setToDoLists={setToDoLists} />
      <ToDoLists
        title="Working"
        toDoLists={toDoLists.filter((todo) => !todo.isDone)}
        setToDoLists={setToDoLists}
      />
      <ToDoLists
        title="Done"
        toDoLists={toDoLists.filter((todo) => todo.isDone)}
        setToDoLists={setToDoLists}
      />
    </div>
  );
};

export default ToDoListContain;
