import React from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({ title, toDoLists }) {
  return (
    <>
      {title}
      <ul>
        {toDoLists.map((todo) => (
          <li key={todo.id}>
            <ToDoItem todo={todo} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default ToDoList;
