import React from "react";
import FormTodoList from "./FormTodoList";
import ToDoList from "./ToDoList";

function ToDoListContain() {
  return (
    <div>
      <FormTodoList />
      <ToDoList />
      <ToDoList />
    </div>
  );
}

export default ToDoListContain;
