import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDoLists from "./ToDoLists";

function ToDoContain() {
  const [toDoLists, setToDoLists] = useState([
    { id: 1, title: "리액트...", content: "재밌을지도?", isDone: false },
    { id: 2, title: "리액트...", content: "재밌..나?", isDone: true },
  ]);
  return (
    <div className="ToDoContain">
      <ToDoForm setToDoLists={setToDoLists} />
      <ToDoLists
        title="Working"
        toDoLists={toDoLists.filter((toDoList) => !toDoList.isDone)}
        setToDoLists={setToDoLists}
      />
      <ToDoLists
        title="Done"
        toDoLists={toDoLists.filter((toDoList) => toDoList.isDone)}
        setToDoLists={setToDoLists}
      />
    </div>
  );
}

export default ToDoContain;
