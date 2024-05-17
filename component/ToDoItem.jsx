import React from "react";

const ToDoItem = ({ todo }) => {
  return (
    <>
      <div>
        {todo.title}
        {todo.content}
      </div>
      <div>
        <button>완료</button>
        <button>삭제</button>
      </div>
    </>
  );
};

export default ToDoItem;
