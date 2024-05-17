import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoLists = ({ title, toDoLists, setToDoLists }) => {
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {toDoLists.map((todo) => (
          <li key={todo.id}>
            <ToDoItem todo={todo} setToDoLists={setToDoLists} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ToDoLists;
