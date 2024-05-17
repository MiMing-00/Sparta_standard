import React from "react";

const ToDoItem = ({ todo, setToDoLists }) => {
  const deleteToDo = () => {
    setToDoLists((prev) => prev.filter((item) => item.id !== todo.id));
  };

  const toggleToDo = () => {
    setToDoLists((prev) =>
      prev.map((item) =>
        item.id === todo.id ? { ...item, isDone: !item.isDone } : item
      )
    );
  };

  return (
    <>
      <div>
        {todo.title}
        {todo.content}
      </div>
      <div>
        <button onClick={toggleToDo}>{todo.isDone ? "취소" : "완료"}</button>
        <button onClick={deleteToDo}>삭제</button>
      </div>
    </>
  );
};

export default ToDoItem;
