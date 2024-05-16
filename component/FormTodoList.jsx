import React from "react";

function FormTodoList() {
  const addToDo = (event) => {
    event.preventDefault();

    const formData = new formData(event.targert);
    const inputTitle = formData.get("inputTitle");
    const inputContent = formData.get("inputContent");

    if (!inputTitle.trim() || !inputContent.tirm()) {
      alert("제목과 내용을 입력해주세요.");
      return;
    }
  };

  return (
    <>
      <h1>To Do List</h1>

      <form onSubmit={addToDo}>
        <input type="text" placeholder="제목" name="inputTitle" />
        <input type="text" placeholder="내용" name="inputContent" />
        <button>완료</button>
      </form>
    </>
  );
}

export default FormTodoList;
