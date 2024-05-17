import React from "react";

function ToDoItem({ toDoList, setToDoLists }) {
  const deleteToDoList = () => {
    setToDoLists((prev) => prev.filter((todo) => todo.id !== toDoList.id));
  };

  const toggleToDoList = () => {
    setToDoLists((prev) =>
      prev.map((todo) =>
        todo.id === toDoList.id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  return (
    <>
      <div>
        {toDoList.title}
        {toDoList.content}
      </div>
      <div>
        <button onClick={toggleToDoList}>
          {toDoList.isDone ? "취소" : "완료"}
        </button>
        <button onClick={deleteToDoList}>삭제</button>
      </div>
    </>
  );
}

export default ToDoItem;
