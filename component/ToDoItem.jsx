import React from "react";

function ToDoItem({ toDoList }) {
  return (
    <div>
      {toDoList.title}
      {toDoList.content}
    </div>
  );
}

export default ToDoItem;
