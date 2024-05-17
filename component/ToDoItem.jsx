import React from "react";

const ToDoItem = ({ todo, setToDoLists }) => {
  //삭제
  const deleteToDo = (id) => {
    setToDoLists((prev) => prev.filter((item) => item.id !== id));
  };

  //토글
  const toggleToDo = (id) => {
    setToDoLists((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    );
  };

  return (
    <>
      <p>{todo.title}</p>
      <p>{todo.content}</p>
      <div>
        <button onClick={() => toggleToDo(todo.id)}>
          {todo.isDone ? "취소" : "완료"}
        </button>
        <button onClick={() => deleteToDo(todo.id)}>삭제</button>
      </div>
    </>
  );
};

export default ToDoItem;
