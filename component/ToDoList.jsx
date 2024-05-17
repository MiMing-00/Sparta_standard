import React from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({ title, toDoLists, setToDoLists }) {
  return (
    <>
      {title}
      <ul>
        {toDoLists.map((todo) => (
          <li key={todo.id}>
            <ToDoItem todo={todo} setToDoLists={setToDoLists} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default ToDoList;
