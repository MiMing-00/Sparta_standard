import React from "react";
import ToDoListForm from "./ToDoListForm";
import ToDoLists from "./ToDoLists";

const ToDoListContain = () => {
  return (
    <div>
      <ToDoListForm />
      <ToDoLists />
      <ToDoLists />
    </div>
  );
};

export default ToDoListContain;
