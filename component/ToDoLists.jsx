import React from "react";
import ToDoItem from "./ToDoItem";

function ToDoLists({ toDoLists, title, setToDoLists }) {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>{title}</h2>
      <ul>
        {toDoLists.map((toDoList) => (
          <li key={toDoList.id}>
            <ToDoItem toDoList={toDoList} setToDoLists={setToDoLists} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoLists;
