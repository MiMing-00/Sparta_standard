import React from "react";

const ToDoListForm = ({ setToDoLists }) => {
  const onSubmitToDo = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const title = formData.get("title");
    const content = formData.get("content");

    if (!title.trim() || !content.trim()) {
      alert("제목과 내용 모두 입력해주세요.");
      return;
    }

    setToDoLists((prev) => [
      ...prev,
      {
        id: Date.now(),
        title,
        content,
        isDone: false,
      },
    ]);

    event.target.reset();
  };

  return (
    <div>
      <form onSubmit={onSubmitToDo}>
        <input type="text" placeholder="제목" name="title" />
        <input type="text" placeholder="내용" name="content" />
        <button type="submit">확인</button>
      </form>
    </div>
  );
};

export default ToDoListForm;
