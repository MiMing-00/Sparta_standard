import React from "react";

function ToDoForm({ setToDoLists }) {
  const onSubmitHandler = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const inputTitle = formData.get("inputTitle");
    const inputContent = formData.get("inputContent");

    if (!inputTitle.trim() || !inputContent.trim()) {
      alert("제목, 내용을 모두 입력해주세요.");
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
    <div>
      <h1 style={{ textAlign: "center" }}>ToDoList</h1>
      <form onSubmit={onSubmitHandler}>
        <input type="text" placeholder="제목" name="inputTitle" />
        <input type="text" placeholder="내용" name="inputContent" />
        <button type="submit">확인</button>
      </form>
    </div>
  );
}

export default ToDoForm;
