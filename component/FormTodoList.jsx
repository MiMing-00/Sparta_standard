import React from "react";

function FormTodoList({ setToDoLists }) {
  const addToDo = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const inputTitle = formData.get("inputTitle");
    const inputContent = formData.get("inputContent");

    if (!inputTitle.trim() || !inputContent.trim()) {
      alert("제목과 내용을 입력해주세요.");
      return;
    }

    setToDoLists((prev) => [
      ...prev,
      {
        id: Date.now(),
        title: inputTitle,
        content: inputContent,
        isDone: false,
      },
    ]);

    event.target.reset();
  };

  return (
    <>
      <h1>To Do List</h1>

      <form onSubmit={addToDo}>
        <input type="text" placeholder="제목" name="inputTitle" />
        <input type="text" placeholder="내용" name="inputContent" />
        <button type="submit">완료</button>
      </form>
    </>
  );
}

export default FormTodoList;
